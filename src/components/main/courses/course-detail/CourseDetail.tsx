import React, { useState, useEffect } from "react";
import { Box, Container, Rating } from "@mui/material";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { CustomButton } from "components/components-exports";
import parse from "html-react-parser";
import { type CourseItemType, type GistContentResponse } from "types/types";
import { useGetCourseContent } from "api/hooks/forexHook";
import "./course-detail.scss";
import { formatCurrency } from "utils/helpers";

const CourseDetail = (): React.JSX.Element => {
    const { courseId } = useParams();
    const [searchParams] = useSearchParams();
    const csn = searchParams.get("csn");
    const getCourses = useGetCourseContent();
    const [courses, setCourses] = useState<CourseItemType[]>([]);
    const course: CourseItemType | undefined = courses?.find(
        (item) => item.id === courseId
    );
    const [value, setValue] = useState<number | null>(course?.rating ?? 4);

    useEffect(() => {
        if (courseId !== undefined) {
            getCourses.call("9f4ac7e02a550cc040f4ecc765f3dca8");
        }
    }, []);

    useEffect(() => {
        if (getCourses.data !== undefined && getCourses.data !== null && courses.length === 0) {
            const apiCourses = Object.values(
                getCourses.data?.files
            )[0] as GistContentResponse;
            const decodeApiCourses = JSON.parse(apiCourses.content);
            setCourses(decodeApiCourses?.body?.courses);
        }
    }, [getCourses.data]);

    let linkUrl = "#"

    if (csn === "master class") {
        linkUrl = "#";
    } else if (csn === "intermediate class") {
        linkUrl = "#";
    } else if (csn === "beginners class") {
        linkUrl = "https://paystack.com/pay/vwsilvj3uo";
    }

    return (
        <Container maxWidth={false} className="course-detail" data-testid="course-detail-container">
            <Box className="course-detail_container-wrapper" data-testid="course-detail-wrapper">
                <Box className="course-detail_banner" data-testid="course-detail-banner">
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
                        </Box>
                        <span>Duration : {course?.duration}</span>
                        <p>Price: ₦{formatCurrency((course?.coursePrice ?? 0) * 1000)}</p>
                        <Link to={linkUrl} target="_blank" rel="noreferrer">
                            <CustomButton title={csn === "beginners class" ? "Purchase" : "Coming soon"} type="button" disabled={csn !== "beginners class"}/>
                        </Link>
                    </article>
                </Box>
                <Box className="course-detail_values">
                    <Box className="course-detail_values-wrapper" data-testid="course-detail-values-wrapper">
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
                    <Box className="course-detail_outro" data-testid="course-detail-outro">
                        <ul>
                            <li>{course?.courseOutro}</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CourseDetail;
