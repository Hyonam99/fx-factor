import { Box } from "@mui/system";
import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import './marquee.scss'

const Marquee = () => {
    const symbols = [
        {
            proName: "FX_IDC:EURUSD",
            title: "EUR/USD"
        },
        {
            proName: "FX_IDC:EURCHF",
            title: "EUR/CHF"
        },
        {
            proName: "FX_IDC:EURGBP",
            title: "EUR/GBP"
        },
        {
            proName: "FX_IDC:USDJPY",
            title: "USD/JPY"
        },
        {
            proName: "FX_IDC:USDCAD",
            title: "USD/CAD"
        },
        {
            proName: "FX_IDC:GBPEUR",
            title: "GBP/EUR"
        },
        {
            proName: "FX_IDC:AUDCAD",
            title: "AUD/CAD"
        },
        {
            proName: "FX_IDC:CADJPY",
            title: "CAD/JPY"
        },
        {
            proName: "FX_IDC:AUDJPY",
            title: "AUD/JPY"
        }
    ]
    return (
        <>
            <Box className="marquee-container" data-testid="marquee-container">
                <TickerTape colorTheme="light" largeChartUrl="false" displayMode="compact" symbols={symbols}/>
            </Box>
        </>
    )
};

export default Marquee;
