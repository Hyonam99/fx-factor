import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type CourseCardProps } from "types/interface";

import './course-card.scss';

const CourseCard = (props: CourseCardProps) => {
    const { courseItem } = props
    return (
        <>
            <Card sx={{ width: 300 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={courseItem.courseImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {courseItem.courseTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {courseItem.courseDescription}
                    </Typography>
                </CardContent>
                <CardActions className="card-button-action">
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default CourseCard;
