import React from "react";
import { Box, Container } from "@mui/material";
import './community.scss';
import { CustomButton } from "components/components-exports";

const Community = () => {
    return (
        <Container maxWidth={false} className="community-container">
            <Box className="community-container-wrapper">
                <Box className="community-container_content">
                    <h1>Our Community</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
                    </p>
                </Box>
                <Box className="community-container_button">
                    <CustomButton title="Join us Now"/>
                </Box>
            </Box>
        </Container>
    )
};

export default Community;
