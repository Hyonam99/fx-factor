/* eslint-disable no-undef */
import React from "react";
import { Box, Container } from "@mui/material";
import './testimonial.scss';

const Testimonial = (): React.JSX.Element => {

    return (
        <Container maxWidth={false} className="testimonial-container">
            <Box className="testimonial-container_wrapper">
                <h1>Testimonials</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </h5>
            </Box>
        </Container>
    )
};

export default Testimonial;
