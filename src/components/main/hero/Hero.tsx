import React from "react";
import { Box, Container } from "@mui/material";
import { CustomButton } from 'components/components-exports'
import './hero.scss'
import { Link } from "react-router-dom";

const Hero = (): React.JSX.Element => {
    return (
        <Container maxWidth={false} className="hero-container">
            <Box className="hero-container_wrapper">
                <h1>
                Unleash Your <br/> Forex Potential.
                </h1>
                <h5>
                Join our community & unlock profitable insights with The FX Factor.
                </h5>
                <Box className="hero-container_wrapper_buttons">
                    <Link to='/courses'>
                        <CustomButton title='Get A Course' size='large' color="primary"/>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
};

export default Hero;
