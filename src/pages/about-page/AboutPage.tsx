import React from "react";
import { Box, Container } from "@mui/material";
import { faker } from '@faker-js/faker';
import { ValuesCard } from "components/components-exports";

import './about-page.scss'

const AboutPage = (): React.JSX.Element => {
    return (
        <Container maxWidth={false} className="about-container">
            <Box className="about-container_text-wrapper">
                <h1>About Us</h1>
                <p>{faker.lorem.sentence(32)}</p>
            </Box>
            <Box className="about-container_core-values">
                <ValuesCard cardTitle="Our Mission" cardDetails={faker.word.words(25)}/>
                <ValuesCard cardTitle="Our Vision" cardDetails={faker.word.words(25)}/>
                <ValuesCard cardTitle="Our Space" cardDetails={faker.word.words(25)}/>
            </Box>
        </Container>
    )
};

export default AboutPage;
