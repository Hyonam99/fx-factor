import React from "react";
import { Box, Container } from "@mui/material";
import './community.scss';
import { CustomButton } from "components/components-exports";
import { Link } from "react-router-dom";

const Community = () => {
    return (
        <Container maxWidth={false} className="community-container">
            <Box className="community-container-wrapper">
                <Box className="community-container_content">
                    <h1>Our Community</h1>
                    <p>{`Our first priority is your success, and we're here to support you in reaching your trading objectives. 
                    We're thrilled to have you on board and are looking forward to watching you develop as a trader. 
                    Explore the site, join the community and make connections with other traders at the FX Factor`}</p>
                </Box>
                <Box className="community-container_button">
                    <Link to="https://t.me/+oq9BDZt0rk4zMDJk" target="_blank" rel="noreferrer">
                        <CustomButton title="Join us Now"/>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
};

export default Community;
