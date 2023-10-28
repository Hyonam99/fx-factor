import React from "react";
import { Box, Container } from "@mui/material";
import './market-price.scss';
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";

const MarketPricing = (): React.JSX.Element => {

    return (
        <Container maxWidth={false} className="market-price-container">
            <Box className="market-price-container_wrapper">
                <h5>THE FX FACTOR PRICE TABLE</h5>
                <h1>RECENT MARKET PRICES</h1>
            </Box>

            <Box className="market-price-container_table-link">
                <Link to="/currency-details">view technical chart</Link>
            </Box>
            <Box className="market-price-container_table">
                <ForexCrossRates colorTheme="light" width="100%" height={350} />
            </Box>
        </Container>
    )
};

export default MarketPricing;
