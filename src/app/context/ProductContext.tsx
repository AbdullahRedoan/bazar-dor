"use client";
import React, { createContext, useState } from 'react';


interface IProductContext {
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>
}

export const ProductContext = createContext<IProductContext>({
    sortBy: "desc",
    setSortBy: () => {},
});


const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    const [sortBy, setSortBy] = useState<string>("");

    const sharedData = {
        sortBy,
        setSortBy
    }

    return <ProductContext.Provider value={sharedData}>
        {children}
    </ProductContext.Provider>
};

export default ProductProvider;