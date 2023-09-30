import React from "react";
import { Box, Container } from "@mui/material";
// import { useGetCurrencyDetails } from "api/hooks/forexHook";
import { sampleForexData } from 'mocked-data/mocked-data';
import './currency-details.scss'
import { ChartComponent } from "components/components-exports";

const CurrencyDetails = () => {

    // const initialCandleData = [
    //     { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    //     { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    //     { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    //     { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    //     { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    //     { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    //     { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    //     { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    //     { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    //     { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 }
    // ];

    // const getCurrencyData = useGetCurrencyDetails()

    // useEffect(() => {
    //     // getCurrencyData.call()
    // }, [])
    // console.log(getCurrencyData)

    // useEffect(() => {
    //     if (getCurrencyData.data !== undefined && getCurrencyData.data !== null) {
    //     }
    // }, [getCurrencyData.data])

    return (
        <Container maxWidth={false} className="currency-container">
            <Box className="currency-container_wrapper">
                <Box className="currency-container_header">
                    <h2>Euro to US Dollar (EUR/USD)</h2>
                    {/* here map through the currenct bio response and return the mini-details for each */}
                    <p>Below you will find both of the currency conversion rates, Pivot points, Technical Indicators and Moving Averages.</p>
                </Box>

                <Box className="currency_info">
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
                </Box>
                <Box className="currency_price-chart">
                    <Box>
                        <ChartComponent data={sampleForexData}></ChartComponent>
                    </Box>
                </Box>
                <Box className="currency_pivots">
                    <Box>pivots pie </Box>
                </Box>
            </Box>
        </Container>
    )
};

export default CurrencyDetails;
