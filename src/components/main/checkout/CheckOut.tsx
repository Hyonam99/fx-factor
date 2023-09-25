import React, { useContext } from "react";
import { CartContext } from "contexts/CourseCart";
import { Box, Container, Rating } from "@mui/material";
import { type CourseItemType } from "types/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import SadEmoji from "assets/images/sad-emoji.png"
import { RxCross2 } from "react-icons/rx";
import { CustomButton } from "components/components-exports";
import './checkout.scss'

interface ContentProps {
    cartDetails: CourseItemType
    handleClick: () => void
}

const CartContent = (props: ContentProps) => {
    const { cartDetails, handleClick } = props
    return (
        <Box className="cart-content">
            <Box className="cart-content_product">
                <img src={cartDetails?.courseImage} alt='course-image'/>
                <Box>
                    <h5>{cartDetails?.courseTitle}</h5>
                    <Box>
                        <p>Duration: 3 months</p>
                        <Rating
                            name="course-rating"
                            value={cartDetails?.rating}
                            readOnly
                            size="small"
                            color="white"
                        />
                    </Box>
                </Box>
            </Box>
            <Box className="cart-content_sub-details">
                <p>price: ${cartDetails?.coursePrice}</p>
                <Box><RiDeleteBin6Line size={16} color='red' onClick={handleClick} cursor="pointer"/></Box>
            </Box>
        </Box>
    )
}

const CheckOut = () => {
    const { cart }: { cart: CourseItemType[] } = useContext(CartContext);
    const { total, removeFromCart, clearCart } = useContext(CartContext);

    // if (!('indexedDB' in window)) {
    //     console.log('indexedDb not supported.')
    // }
    // const dbPromise = indexedDB.open('test-db1', 1);
    // dbPromise.addEventListener('error', () => { console.log('error with db') })
    // dbPromise.addEventListener('success', () => { console.log('success with db') })

    return (
        <Container maxWidth={false} className="checkout-container">
            <Box className="checkout-container_wrapper">
                {cart?.length > 0
                    ? <>
                        <Box className="checkout-header">
                            <h4>Your Cart</h4>
                            <span onClick={() => { clearCart() }}><RxCross2 size={16} color='red'/>clear cart</span>
                        </Box>
                        <p><i>{cart.length} courses to purchase</i></p>
                        <Box className="checkout-content">
                            {cart.map((item) => (
                                <CartContent key={item.id} cartDetails={item} handleClick={() => { removeFromCart(item.id) }}/>
                            ))}
                        </Box>
                        <Box className="checkout-button">
                            <p>Total : <span>$ {total}</span></p>
                            <CustomButton
                                title='Checkout'
                                type="button"
                            />
                        </Box>
                    </>
                    : <>
                        <Box className='checkout-empty'>
                            <img src={SadEmoji} alt='sad-emoji' />
                            <p>No items available, check courses to add to cart</p>
                        </Box>
                    </>}

            </Box>
        </Container>
    );
};

export default CheckOut;
