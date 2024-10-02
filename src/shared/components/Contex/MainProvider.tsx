'use client';

import { createContext, useContext, useState } from "react";

interface MainContextType {
    IsAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}


const MainContext = createContext<MainContextType>({} as MainContextType);
export const useMainContext = () => useContext(MainContext);



const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [IsAuth, setIsAuth] = useState(false);


    
    return (
        <MainContext.Provider value={{ IsAuth, setIsAuth }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;