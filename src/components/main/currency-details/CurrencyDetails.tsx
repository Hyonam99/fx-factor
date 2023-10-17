import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useGetCurrencyHistory } from "api/hooks/forexHook";
// import { sampleForexData } from 'mocked-data/mocked-data';
import './currency-details.scss'
import { ChartComponent, AChart } from "components/components-exports";
import { type HistoryResponse, type ChartDataSet } from "types/types";

const CurrencyDetails = () => {

    // const getCurrencyData = useGetCurrencyDetails()
    const getCurrencyHistory = useGetCurrencyHistory()
    const [chartData, setChartData] = useState<ChartDataSet[]>([])

    // useEffect(() => {
    //     // getCurrencyData.call()
    // }, [])
    useEffect(() => {
        // getCurrencyHistory.call()
    }, [])
    // console.log(getCurrencyData, "getCurrencyData")

    // useEffect(() => {
    //     if (getCurrencyData.data !== undefined && getCurrencyData.data !== null) {
    //     }
    // }, [getCurrencyData.data])

    useEffect(() => {
        if (getCurrencyHistory.data !== undefined && getCurrencyHistory.data !== null) {
            const apiResponse = Object.values(getCurrencyHistory.data?.response) as [HistoryResponse]
            const compareDateObjects = (a: ChartDataSet, b: ChartDataSet): number => {
                return new Date(a.time).getTime() - new Date(b.time).getTime();
            }
            const chartApiData = apiResponse.map((item) => ({
                time: item.t,
                open: Number(item.o),
                high: Number(item.h),
                low: Number(item.l),
                close: Number(item.c)
            })).sort(compareDateObjects)
            setChartData(chartApiData)
        }
    }, [getCurrencyHistory.data])

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
                        {/* <ChartComponent data={chartData}></ChartComponent> */}
                    </Box>
                    <AChart />
                </Box>
                <Box className="currency_pivots">
                    <Box>pivots pie </Box>
                </Box>
            </Box>
        </Container>
    )
};

export default CurrencyDetails;
