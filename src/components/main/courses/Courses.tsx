import React from "react";
import { Box, Container } from "@mui/material";
import { CourseCard } from "components/components-exports";
import { type CoursesProps } from "types/interface";
import { renderDemoCourses } from "mocked-data/mocked-data";

import './courses.scss';

const Courses = (props: CoursesProps) => {
    const { limit } = props
    const demoCourse = renderDemoCourses()
    return (
        <Container maxWidth={false} className="courses-container">
            <Box className="courses-container_wrapper">
                <h1>Creatives Forex Certificate Program</h1>
                <h5>Unlock your creative potential with our<br /> specialized Certificate Program for Forex<br /> Traders.</h5>
            </Box>
            <Box className="courses-list">
                <Box className="courses-list_wrapper">
                    {demoCourse.data.slice(0, limit).map((course) => (
                        <CourseCard key={course.courseTitle} courseItem={course}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
};

export default Courses;
