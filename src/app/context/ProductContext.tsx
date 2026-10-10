"use client";
import { IProduct } from '@/app/types/types';
import React, { createContext, useState } from 'react';


interface IProductContext {
    
}

export const ProductContext = createContext<IProductContext>({
    
});


const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const sharedData = {
        
    }

    return <ProductContext.Provider value={sharedData}>
        {children}
    </ProductContext.Provider>
};

export default ProductProvider;