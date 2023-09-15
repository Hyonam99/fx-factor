import React, { useState, useContext } from "react";
import { Box, Container, Rating } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { CustomButton } from "components/components-exports";
import { CartContext } from "contexts/CourseCart";
import { renderDemoCourses } from "mocked-data/mocked-data";

import './course-detail.scss';
import { type CourseItemType } from "types/types";

const CourseDetail = (): React.JSX.Element => {
    const { courseId } = useParams();
    const { cart, addToCart } = useContext(CartContext)
    const [value, setValue] = useState<number | null>(4);
    const navigate = useNavigate()
    const demoCourse: CourseItemType | undefined = renderDemoCourses().data.find((item) => item.id === courseId)
    const cartItem = cart.find((item: CourseItemType) => item.id === courseId);

    const handleAddCart = () => {
        if (cartItem?.isAdded === true) {
            navigate('/checkout')
        } else {
            addToCart(demoCourse)
        }
    }
    return (
        <Container maxWidth={false} className="course-detail">
            <Box className="course-detail_container-wrapper">
                <Box className="course-detail_banner">
                    <article>
                        <h2>{demoCourse?.courseTitle}</h2>
                        <p>{demoCourse?.courseDescription}</p>
                        <Box className="course-detail_rating">
                            <Rating
                                name="course-rating"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                readOnly
                                size="small"
                                color="white"
                            />
                            <span>26 Enrolled </span>
                        </Box>
                        <span>Duration : 3 months</span>
                        <span>Closing Date : 26th December 2023</span>
                        <p>Price: N 26,000</p>
                        <CustomButton
                            title={cartItem?.isAdded === true ? "View Cart" : "Add to Cart"}
                            type="button"
                            onClick={handleAddCart}
                        />
                        <small>{courseId}</small>
                    </article>
                </Box>
                <Box className="course-detail_values">
                    <Box className="course-detail_values-wrapper">
                        <Box className="course-detail_values-description">
                            <h2>What you will gain</h2>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                        </Box>
                        <Box className="course-detail_values-content">
                            <h2>Course content</h2>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                            <span>You will discover the secret recipe of exceptional trading.</span>
                        </Box>
                    </Box>
                    <Box>
                        <h2>Requirements</h2>
                        <span>You will discover the secret recipe of exceptional trading.</span>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CourseDetail;
