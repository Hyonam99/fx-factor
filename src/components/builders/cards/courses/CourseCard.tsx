import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type CourseCardProps } from "types/interface";
import { motion } from "framer-motion";
import './course-card.scss';
import { Link } from "react-router-dom";
import { cardVariants } from "utils/themes";

const CourseCard = (props: CourseCardProps) => {
    const { courseItem, animationDelay } = props

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            data-testid="course-card-container"
        >
            <motion.div variants={cardVariants(animationDelay as number)}>
                <Card sx={{ width: 300 }}>
                    <CardMedia
                        component="img"
                        alt="forex-course"
                        height="140"
                        image={courseItem.courseImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" data-testid="course-card-title">
                            {courseItem.courseTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" minHeight="160.9px" data-testid="course-card-intro">
                            {courseItem.courseIntro}
                        </Typography>
                    </CardContent>
                    <CardActions className="card-button-action">
                        <Link to={`/courses/${courseItem.id as string}/?csn=${courseItem.courseTitle.toLowerCase()}`}><Button>Learn More</Button></Link>
                    </CardActions>
                </Card>
            </motion.div>
        </motion.div>
    )
};

export default CourseCard;
