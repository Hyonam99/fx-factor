import React, { createContext, useState, useEffect } from "react";
import { type CourseItemType } from "../types/types";

// Use Redux for this

export const CartContext = createContext<any>(null);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [cart, setCart] = useState<CourseItemType[]>(JSON.parse(localStorage.getItem("courseCart") as string) ?? []);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + Number(currentItem.coursePrice) * Number(currentItem.quantity);
        }, 0);

        setTotal(total);

        if (cart !== null && cart !== undefined) {
            const quantity = cart.reduce((accumulator, currentItem) => {
                return accumulator + Number(currentItem.quantity);
            }, 0);

            setItemQuantity(quantity);
        }

    }, [cart]);

    useEffect(() => {
        // Save the value to localStorage whenever it changes
        localStorage.setItem('courseCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: CourseItemType) => {
        const newItem = { ...product, quantity: 1, isAdded: true };

        setCart([...cart, newItem]);
    };

    const removeFromCart = (id: string) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });

        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                itemQuantity,
                total,
                clearCart,
                removeFromCart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
