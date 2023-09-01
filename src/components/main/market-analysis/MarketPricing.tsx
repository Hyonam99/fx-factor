/* eslint-disable no-undef */
import React from "react";
import { Box, Container } from "@mui/material";
import './market-price.scss';

const MarketPricing = (): React.JSX.Element => {

    return (
        <Container maxWidth={false} className="market-price-container">
            <Box className="market-price-container_wrapper">
                <h5>THE FX FACTOR PRICE TABLE</h5>
                <h1>RECENT MARKET PRICES</h1>
            </Box>
        </Container>
    )
};

export default MarketPricing;
