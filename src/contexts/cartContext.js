import React, { useState, useContext } from "react";

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const clearCart = () => setCart([])
    const total = ()=>{
        return cart.reduce((acumulador,detalle)=>acumulador+detalle.counter*detalle.precio,0)    
    }
    const productCounter = () => cart.reduce((acumulador,product)=>acumulador+product.counter,0)

    const addItem = ({ detalle }, cantidad) => {
        const {counter=0}= cart.find(el => el.id === detalle.id) ||{};
        const newCart = cart.filter(el => el.id !== detalle.id)
        setCart([...newCart,{...detalle,counter:counter+cantidad}])
   
    }


    return (
        <CartContext.Provider value={{ addItem,clearCart,total,productCounter,cart }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


