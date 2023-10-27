import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useGetCurrencyHistory } from "api/hooks/forexHook";
import { MiniChart, TechnicalAnalysis, Timeline, AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import './currency-details.scss'
// import { AChart } from "components/components-exports";
// import { type HistoryResponse, type ChartDataSet } from "types/types";

const CurrencyDetails = () => {

    // const getCurrencyData = useGetCurrencyDetails()
    const getCurrencyHistory = useGetCurrencyHistory()

    // useEffect(() => {
    //     // getCurrencyData.call()
    // }, [])
    useEffect(() => {
        // getCurrencyHistory.call()
    }, [])
    // console.log(getCurrencyData, "getCurrencyData")

    // useEffect(() => {
    // if (getCurrencyData.data !== undefined && getCurrencyData.data !== null) {
    // }
    // }, [getCurrencyData.data])

    return (
        <Container maxWidth={false} className="currency-container">
            <Box className="currency-container_wrapper">
                <Box className="currency-container_header">
                    <h2>Euro to US Dollar (EUR/USD)</h2>
                    {/* here map through the currenct bio response and return the mini-details for each */}
                    <p>Below you will find both of the currency conversion rates, Pivot points, Technical Indicators and Moving Averages.</p>
                </Box>

                {/* <Box className="currency_info">
                    <article>
                        <Box className="currency_info_heading"><small>spread:</small></Box>
                        <Box className="currency_info_heading"><h5>EUR/USD</h5></Box>
                        <Box className="currency_info_heading"><small>Time:</small></Box>
                    </article>
                    <article>
                        <h4>1.105</h4>
                    </article>
                    <article>
                        <Box className="currency_info_sub-details"><small>Bid/Ask:</small></Box>
                        <Box className="currency_info_sub-details"><small>High/Low</small></Box>
                        <Box className="currency_info_sub-details"><small>Chng/Chng%</small></Box>
                    </article>
                </Box> */}
                <Box className="currency_price-chart">
                    <Box>
                        <button>change chart</button>
                    </Box>
                    <Box>
                        <MiniChart colorTheme="light" width="100%" height={400} symbol={"USDGBP"}/>
                    </Box>
                    <Box>
                        <AdvancedRealTimeChart
                            theme="light"
                            width="100%"
                            hide_side_toolbar={true}
                            symbol={"USDCAD"}
                        />
                    </Box>
                </Box>
                <Box className="currency_pivots">
                    <Box>
                        <TechnicalAnalysis colorTheme="light" width="100%" symbol={"USDGBP"} height={400} />
                    </Box>
                    <Box>
                        <Timeline colorTheme="light" width="100%" feedMode="market" market="forex" height={400} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
};

export default CurrencyDetails;
