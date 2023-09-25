import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Rating } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { CustomButton } from "components/components-exports";
import { CartContext } from "contexts/CourseCart";
import parse from 'html-react-parser';
import { type CourseItemType, type GistContentResponse } from "types/types";
import { useGetCourseContent } from "api/hooks/forexHook";
import './course-detail.scss';

const CourseDetail = (): React.JSX.Element => {
    const { courseId } = useParams();
    const getCourses = useGetCourseContent()
    const [courses, setCourses] = useState<CourseItemType[]>([])
    const { cart, addToCart } = useContext(CartContext)
    const navigate = useNavigate()
    const course: CourseItemType | undefined = courses?.find((item) => item.id === courseId)
    const [value, setValue] = useState<number | null>(course?.rating ?? 4);
    const cartItem = cart.find((item: CourseItemType) => item.id === courseId);

    useEffect(() => {
        if (courseId !== undefined) {
            getCourses.call('9f4ac7e02a550cc040f4ecc765f3dca8')
        }
    }, [])

    useEffect(() => {
        if (getCourses.data !== undefined && getCourses.data !== null) {
            const apiCourses = Object.values(getCourses.data?.files)[0] as GistContentResponse
            const decodeApiCourses = JSON.parse(apiCourses.content)
            setCourses(decodeApiCourses?.body?.courses)
        }
    }, [getCourses.data])

    const handleAddCart = () => {
        if (cartItem?.isAdded === true) {
            navigate('/checkout')
        } else {
            addToCart(course)
        }
    }
    return (
        <Container maxWidth={false} className="course-detail">
            <Box className="course-detail_container-wrapper">
                <Box className="course-detail_banner">
                    <article>
                        <h2>{course?.courseTitle}</h2>
                        <p>{course?.courseDescription}</p>
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
                        <p>Price: ${course?.coursePrice}</p>
                        <CustomButton
                            title={cartItem?.isAdded === true ? "View Cart" : "Add to Cart"}
                            type="button"
                            onClick={handleAddCart}
                        />
                    </article>
                </Box>
                <Box className="course-detail_values">
                    <Box className="course-detail_values-wrapper">
                        <Box className="course-detail_values-description">
                            <h2>Course content</h2>
                            <ul>
                                {course?.courseHighlights?.map((highlight, i) => (
                                    <li key={`highlight-${i + 1}`}>{parse(highlight)}</li>
                                ))}
                            </ul>
                        </Box>
                        <Box className="course-detail_values-content">
                            <h2>What you will gain</h2>
                            <ul>
                                {course?.courseUsp?.map((usp, i) => (
                                    <li key={`usp-${i + 1}`}>{parse(usp)}</li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                    <Box>
                        <span>{course?.courseOutro}</span>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CourseDetail;