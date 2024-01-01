import React from "react";
import { Box, Container } from "@mui/material";
import './market-price.scss';
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";

const MarketPricing = () => {

    return (
        <Container maxWidth={false} className="market-price-container" data-testid="market-price-container">
            <Box className="market-price-container_wrapper" data-testid="market-price-header">
                <h5>THE FX FACTOR PRICE TABLE</h5>
                <h1>RECENT MARKET PRICES</h1>
            </Box>

            <Box className="market-price-container_table-link" data-testid="chart-link-container">
                <Box className="link_wrapper">
                    <Link to="/currency-details" data-testid="technical-chart-link">View technical chart</Link>
                </Box>
            </Box>
            <Box className="market-price-container_table" data-testid="forex-rates-container">
                <ForexCrossRates colorTheme="light" width="100%" height={350} />
            </Box>
        </Container>
    )
};

export default MarketPricing;
