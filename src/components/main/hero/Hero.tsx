import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion"
import { CustomButton } from 'components/components-exports'
import { headingVariant, itemVariants } from "utils/themes";
import { Link } from "react-router-dom";
import './hero.scss'

const Hero = (): React.JSX.Element => {

    return (
        <Container maxWidth={false} className="hero-container">
            <motion.article
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                className="hero-container_wrapper"
            >
                <motion.h1 variants={headingVariant(1.5)}>
                    Unleash Your <br/> Forex Potential.
                </motion.h1>

                <motion.h5 variants={itemVariants(1.5)}>
                    Join our community & unlock profitable insights with The FX Factor.
                </motion.h5>

                <motion.div
                    variants={itemVariants(1.8)}
                    className="hero-container_wrapper_buttons"
                >
                    <Link to='/courses' data-testid="hero-courses-link">
                        <CustomButton title='Get A Course' size='large' color="primary"/>
                    </Link>
                </motion.div>
            </motion.article>
        </Container>
    )
};

export default Hero;
