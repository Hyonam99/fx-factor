import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type CourseCardProps } from "types/interface";

import './course-card.scss';
import { Link } from "react-router-dom";

const CourseCard = (props: CourseCardProps) => {
    const { courseItem } = props
    return (
        <>
            <Card sx={{ width: 300 }}>
                <CardMedia
                    component="img"
                    alt="forex"
                    height="140"
                    image={courseItem.courseImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {courseItem.courseTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" minHeight="160.9px">
                        {courseItem.courseIntro}
                    </Typography>
                </CardContent>
                <CardActions className="card-button-action">
                    <Link to={`/courses/${courseItem.id as string}`}><Button>Learn More</Button></Link>
                </CardActions>
            </Card>
        </>
    )
};

export default CourseCard;
