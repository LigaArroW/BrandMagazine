'use client';

import { getAccessToken, verifyAuth } from "@/lib/auth/authAction";
import { getMyOrders } from "@/lib/order/orderAction";
import { getUserDetail } from "@/lib/user/userAction";
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
    myCart: IGetOrders[]

}


const MainContext = createContext<MainContextType>({} as MainContextType);
export const useMainContext = () => useContext(MainContext);



const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [myCart, setMyCart] = useState<IGetOrders[]>([]);

    const login = (accessToken: string, refreshToken: string) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
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
                setMyCart(orders);
                setUser(profile!);

            }
        };
        if (accessToken && refreshToken) fetchProfile();
    }, [accessToken, refreshToken]);

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem(TokenNames.access);
        localStorage.removeItem(TokenNames.refresh);
    };


    return (
        <MainContext.Provider value={{ login, logout, accessToken, refreshToken, user, updUser, myCart }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;