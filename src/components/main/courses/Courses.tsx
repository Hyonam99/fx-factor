import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { CourseCard } from "components/components-exports";
import { type CoursesProps } from "types/interface";
import { useGetCourseContent } from "api/hooks/forexHook";
import { type GistContentResponse, type CourseItemType } from "types/types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './courses.scss';

const Courses = (props: CoursesProps) => {
    const { limit } = props
    const getCourses = useGetCourseContent()
    const [courses, setCourses] = useState<CourseItemType[]>([])
    const animationDelay = [0.2, 0.4, 0.6]

    useEffect(() => {
        getCourses.call('9f4ac7e02a550cc040f4ecc765f3dca8')
    }, [])

    useEffect(() => {
        if (getCourses.data !== undefined && getCourses.data !== null && courses.length === 0) {
            const apiCourses = Object.values(getCourses.data?.files)[0] as GistContentResponse
            const decodeApiCourses = JSON.parse(apiCourses.content)
            setCourses(decodeApiCourses?.body?.courses)
        }
    }, [getCourses.data])

    return (
        <Container maxWidth={false} className="courses-container">
            <Box className="courses-container_wrapper">
                <h1>Creatives Forex Certificate Program</h1>
                <h5>Unlock your creative potential with our<br /> specialized Certificate Program for Forex<br /> Traders.</h5>
            </Box>
            <Box className="courses-indicator"><BsArrowLeft size={18} title="swipe-left-arrow"/> swipe to view more <BsArrowRight size={18} title="swipe-right-arrow"/> </Box>
            <Box className="courses-list">
                <Box className="courses-list_wrapper" data-testid="course-card-wrapper">
                    {courses?.slice(0, limit).map((course, i: number) => (
                        <CourseCard key={course.courseTitle} courseItem={course} animationDelay={animationDelay[i]}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
};

export default Courses;
