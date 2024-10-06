'use client';

import { getAccessToken, verifyAuth } from "@/lib/auth/authAction";
import { getFavorites } from "@/lib/favorite/favoriteAction";
import { getMyOrders } from "@/lib/order/orderAction";
import { getUserDetail } from "@/lib/user/userAction";
import { setAuth } from "@/shared/redux/slice/authSlice";
import { TokenNames } from "@/types/auth";
import { ICart } from "@/types/cart";
import { IGetOrders } from "@/types/order";
import { IProduct } from "@/types/product";
import { TempUser, UserDTO } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";

interface MainContextType {
    user: UserDTO | null;
    accessToken: string | null;
    refreshToken: string | null;
    login: (accessToken: string, refreshToken: string) => void;
    logout: () => void;
    updUser: (user: UserDTO) => void;
    myOrders: IGetOrders[]
    favorites: IProduct[]
    updFavorites: () => void
    cart: ICart[]
    // setCart: React.Dispatch<React.SetStateAction<ICart[]>>

    setCartLS: (car: ICart, del?: boolean) => void
    deliveryIndex: number
    setDeliveryIndex: React.Dispatch<React.SetStateAction<number>>
    // promoCode: string
    // setPromoCode: React.Dispatch<React.SetStateAction<string>>
    tempUser: TempUser | null
    setTempUser: React.Dispatch<React.SetStateAction<TempUser | null>>
}


const MainContext = createContext<MainContextType>({} as MainContextType);
export const useMainContext = () => useContext(MainContext);



const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [myOrders, setMyOrders] = useState<IGetOrders[]>([]);
    const [favorites, setFavorites] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<ICart[]>([]);
    const [deliveryIndex, setDeliveryIndex] = useState<number>(0);
    // const [promoCode, setPromoCode] = useState<string>('');
    const [tempUser, setTempUser] = useState<TempUser | null>(null);

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
        setAccessToken(localStorage.getItem(TokenNames.access));
        setRefreshToken(localStorage.getItem(TokenNames.refresh));
    }, [])

    useEffect(() => {
        const fetchProfile = async () => {
            let accessTokenTemp = accessToken;
            if (accessToken && refreshToken) {
                const verif = await verifyAuth(accessToken);
                if (!verif) {
                    // console.log('будет переделка токена');

                    accessTokenTemp = await getAccessToken(refreshToken).then(res => {
                        if (res) {
                            return res.access
                        }
                        return null
                    });
                    if (accessTokenTemp) {
                        // console.log('логаут рефрешь прошел, запись токена', accessTokenTemp);
                        // setIsAuth(true);
                        setAccessToken(accessTokenTemp);
                        localStorage.setItem(TokenNames.access, accessTokenTemp);
                    } else {
                        console.log('логаут рефрешь не прошел так же');
                        return logout();
                    }
                }

                const profile = await getUserDetail(accessTokenTemp!);
                if (!profile) {
                    // console.log('profile', profile);

                    return logout();
                }
                const orders = await getMyOrders(accessTokenTemp!);
                const fav = await getFavorites(accessTokenTemp!);
                setFavorites(fav!.results);
                setMyOrders(orders);
                setUser(profile!);

            }
        };
        if (accessToken && refreshToken) fetchProfile();
    }, [accessToken, refreshToken]);

    const updFavorites = async () => {
        if (accessToken) {
            const fav = await getFavorites(accessToken);
            setFavorites(fav!.results);
        }
    }

    const getCartLS = () => {
        const cartLS = localStorage.getItem('cart')
        if (cartLS) {
            const cart: ICart[] = JSON.parse(cartLS);
            return setCart(cart);

        }
        // return setCart([])
    }


    useEffect(() => {
        getCartLS()
    }, [])

    const setCartLS = (car: ICart, del: boolean = false) => {

        const findProductToCart = cart.find((item) => item.product.id === car.product.id) || null
        if (findProductToCart) {
            let newCart: ICart[] = []

            if (del) {
                newCart = cart.filter((item) => item.product.id !== car.product.id)
            } else {
                newCart = cart.map((item) => {
                    if (item.product.id === car.product.id) {
                        return car
                    }
                    return item
                })
            }

            // const newCart = cart.map((item) => {
            //     if (item.product.id === car.product.id) {
            //         return car
            //     }
            //     return item
            // })

            localStorage.setItem('cart', JSON.stringify(newCart))
            setCart(newCart)
            return
        }

        localStorage.setItem('cart', JSON.stringify([...cart, car]))
        setCart(prev => [...prev, car])


        // localStorage.setItem('cart', JSON.stringify([...cart, car]))
        // setCart(prev => [...prev, car])
    }


    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem(TokenNames.access);
        localStorage.removeItem(TokenNames.refresh);
    };


    return (
        <MainContext.Provider value={{
            login,
            logout,
            accessToken,
            refreshToken,
            user,
            updUser,
            myOrders,
            favorites,
            updFavorites,
            cart,
            setCartLS,
            deliveryIndex,
            setDeliveryIndex,
            // promoCode,
            // setPromoCode,
            tempUser,
            setTempUser
        }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;