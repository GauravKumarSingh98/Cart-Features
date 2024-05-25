import { createContext, useReducer } from "react";
import cartReducer from "../components/CartReducer";

export const CartContextt = createContext();


export const CartProvider = ({children}) => {
    const [ cart, dispatch ] = useReducer(cartReducer, []);
    return (
        <CartContextt.Provider value={{cart, dispatch}}>
            {children}
        </CartContextt.Provider>

    );
};