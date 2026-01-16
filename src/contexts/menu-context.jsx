import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const contextValue = {
        menuVisibility,
        toggleMenu: () => setMenuVisibility(() => !menuVisibility)
    }

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    return context;
}