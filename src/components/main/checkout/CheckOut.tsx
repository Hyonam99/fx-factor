import React, { useContext } from "react";
import { CartContext } from "contexts/CourseCart";
import { Box, Container } from "@mui/material";
import { type CourseItemType } from "types/types";
import './checkout.scss'

const CartContent = () => {
    return (
        <Box className="cart-content">
            <Box className="cart-content_product">
                <img />
                <Box>
                    <h4>Title</h4>
                    <Box>
                        <p>Duration</p>
                        <p>Rating</p>
                    </Box>
                </Box>
            </Box>
            <Box className="cart-content_sub-details">
                <p>price</p>
                <Box>remove</Box>
            </Box>
        </Box>
    )
}

const CheckOut = () => {
    const { cart }: { cart: CourseItemType[] } = useContext(CartContext);

    // if (!('indexedDB' in window)) {
    //     console.log('indexedDb not supported.')
    // }
    // const dbPromise = indexedDB.open('test-db1', 1);
    // dbPromise.addEventListener('error', () => { console.log('error with db') })
    // dbPromise.addEventListener('success', () => { console.log('success with db') })

    return (
        <Container maxWidth={false} className="checkout-container">
            <Box className="checkout-container_wrapper">
                <Box className="checkout-header">
                    <h4>Your Cart</h4>
                    <span>clear cart</span>
                </Box>
                <p>6 courses to purchase</p>
                <Box className="checkout-content">
                    {cart.map((item) => (
                        <CartContent key={item.id}/>
                    ))}
                </Box>
                <Box className="checkout-button">
                    <p>Total : <span>N26,000</span></p>
                    <span>Checkout</span>
                </Box>
            </Box>
        </Container>
    );
};

export default CheckOut;
