'use client';

import { getAccessToken, verifyAuth } from "@/lib/auth/authAction";
import { getMyOrders } from "@/lib/order/orderAction";
import { getUserDetail } from "@/lib/user/userAction";
import { setAuth } from "@/shared/redux/slice/authSlice";
import { TokenNames } from "@/types/auth";
import { IGetOrders } from "@/types/order";
import { UserDTO } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";

interface MainContextType {
    user: UserDTO | null;
    accessToken: string | null;
    refreshToken: string | null;
    login: (accessToken: string, refreshToken: string) => void;
    logout: () => void;
    updUser: (user: UserDTO) => void;
    myOrders: IGetOrders[]
    // isAuth: boolean
}


const MainContext = createContext<MainContextType>({} as MainContextType);
export const useMainContext = () => useContext(MainContext);



const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserDTO | null>(null);
    // const [isAuth, setIsAuth] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [myOrders, setMyOrders] = useState<IGetOrders[]>([]);

    const login = (accessToken: string, refreshToken: string) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        // setIsAuth(true);
        localStorage.setItem(TokenNames.access, accessToken);
        localStorage.setItem(TokenNames.refresh, refreshToken);
    };

    const updUser = (user: UserDTO) => {
        setUser(user);
    }

    useEffect(() => {
        // setToken(localStorage.getItem('token'));
        setAccessToken(localStorage.getItem(TokenNames.access));
        setRefreshToken(localStorage.getItem(TokenNames.refresh));
    }, [])

    useEffect(() => {
        const fetchProfile = async () => {
            let accessTokenTemp = accessToken;
            if (accessToken && refreshToken) {
                const verif = await verifyAuth(accessToken);
                if (!verif) {
                    console.log('будет переделка токена');

                    accessTokenTemp = await getAccessToken(refreshToken).then(res => {
                        if (res) {
                            return res.access
                        }
                        return null
                    });
                    if (accessTokenTemp) {
                        console.log('логаут рефрешь прошел, запись токена', accessTokenTemp);
                        // setIsAuth(true);
                        setAccessToken(accessTokenTemp);
                    } else {
                        console.log('логаут рефрешь не прошел так же');
                        return logout();
                    }
                }

                const profile = await getUserDetail(accessTokenTemp!);
                if (!profile) {
                    console.log('profile', profile);

                    return logout();
                }
                const orders = await getMyOrders(accessTokenTemp!);
                console.log("🚀 ~ fetchProfile в контексте ~ orders:", orders)
                setMyOrders(orders);
                setUser(profile!);

            }
        };
        if (accessToken && refreshToken) fetchProfile();
    }, [accessToken, refreshToken]);

    const logout = () => {
        // setIsAuth(false);
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem(TokenNames.access);
        localStorage.removeItem(TokenNames.refresh);
    };


    return (
        <MainContext.Provider value={{ login, logout, accessToken, refreshToken, user, updUser, myOrders }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;