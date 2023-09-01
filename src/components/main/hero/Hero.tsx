import React from "react";
import { Box, Container } from "@mui/material";
import { CustomButton } from 'components/components-exports'
import './hero.scss'

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
                    <CustomButton title='Get A Course' size='large' color="primary"/>
                    <CustomButton title='Join Us' size='large' color="secondary" outlined/>
                </Box>
            </Box>
        </Container>
    )
};

export default Hero;
