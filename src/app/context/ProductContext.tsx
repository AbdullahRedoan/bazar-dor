"use client";
import React, { createContext, useState } from 'react';


interface IProductContext {
    activeButton: string;
    setActiveButton: React.Dispatch<React.SetStateAction<string>>
}

export const ProductContext = createContext<IProductContext>({
    activeButton: "today",
    setActiveButton: () => {},
});


const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    const [activeButton, setActiveButton] = useState<string>("");

    const sharedData = {
        activeButton,
        setActiveButton
    }

    return <ProductContext.Provider value={sharedData}>
        {children}
    </ProductContext.Provider>
};

export default ProductProvider;