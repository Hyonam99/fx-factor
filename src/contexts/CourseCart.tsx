import React, { createContext, useState, useEffect } from "react";
import { type CourseItemType } from "../types/types";

export const CartContext = createContext<any>(null);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [cart, setCart] = useState<CourseItemType[]>([]);
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
        // localStorage.setItem('courseCart', cart);
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

    const incrementQuantity = (id: string) => {
        const cartItem = cart.find((item) => item.id === id);

        if (cartItem !== null && cartItem !== undefined) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: Number(cartItem.quantity) + 1 };
                } else {
                    return item;
                }
            });

            setCart(newCart);
        }

    };

    const decrementQuantity = (id: string) => {
        const cartItem = cart.find((item) => item.id === id) as CourseItemType;

        if (cartItem !== null && cartItem !== undefined) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: Number(cartItem.quantity) - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }

        if (Number(cartItem?.quantity) < 2) {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                itemQuantity,
                total,
                clearCart,
                incrementQuantity,
                decrementQuantity,
                removeFromCart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
