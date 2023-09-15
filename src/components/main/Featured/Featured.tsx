import React from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";
import MiniCard from "components/builders/cards/mini-info/MiniCard";
import { CustomAccordion } from "components/components-exports";
import { renderDemoCourses } from "mocked-data/mocked-data";

import './featured.scss';

const Featured = () => {
    const demoCourse = renderDemoCourses()
    return (
        <Container maxWidth={false} className="featured-container">
            <Box className="featured_section-left">
                <article>
                    <h1>Our recent updates</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
                    </p>
                </article>
                <div className="featured_section-left_image-holder">
                    <img
                        src="https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/analyst-single_zduhnj.jpg"
                        alt="featured-picture"
                    />
                </div>
            </Box>
            <Box className="featured_section-right">
                {demoCourse.data.map((item) => (
                    <MiniCard key={item.courseTitle} cardDetails={item.courseDescription} cardTitle={item.courseTitle}/>
                ))}
            </Box>
            <Box className="featured_section-right-accordion">
                {demoCourse.data.map((feature, i) => (
                    <CustomAccordion
                        key={feature.courseTitle}
                        title={feature.courseTitle}
                        miniDetails={`Gain Access to ${feature.courseTitle}`}
                        mainContent={
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>FX</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{feature.courseDescription}</Typography>
                                </Grid>
                            </Grid>
                        }
                        itemIndex={i}
                    />
                ))}
            </Box>
        </Container>
    )
};

export default Featured;
