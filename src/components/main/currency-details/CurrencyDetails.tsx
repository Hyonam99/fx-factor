import React from "react";
import { Box, Container } from "@mui/material";
// import { useGetCurrencyDetails } from "api/hooks/forexHook";
import { sampleForexData } from 'mocked-data/mocked-data';
import './currency-details.scss'
import { ChartComponent } from "components/components-exports";

const CurrencyDetails = () => {

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
