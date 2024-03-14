"use client";
import React, { ReactNode, createContext, useState } from "react";

type ContextValueType = {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    showSidebar: boolean;
};
export const StateContext = createContext<ContextValueType>({ setShowSideBar: () => { }, showSidebar: false })

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showSidebar, setShowSideBar] = useState<boolean>(true)
    const contextValue = {
        setShowSideBar,
        showSidebar
    }
    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;