import React from 'react';
import { Box, Container } from "@mui/material";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import './currency-details.scss'

const CurrencyDetails = () => {

    return (
        <Container maxWidth={false} className="currency-container" data-testid="currency-container">
            <Box className="currency-container_wrapper">
                <Box className="currency-container_header">
                    <h2>Technical Chart Analysis</h2>
                    <p>Below you will find the currency conversion rates, Pivot points, Technical Indicators and Moving Averages.</p>
                </Box>
                <Box className="currency_price-chart" data-testid="currency-price-chart">
                    <Box>
                        <AdvancedRealTimeChart
                            theme="light"
                            width="100%"
                            hide_side_toolbar={true}
                            symbol={"USDCAD"}
                            details={true}
                            hotlist={true}
                            calendar={true}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
};

export default CurrencyDetails;
