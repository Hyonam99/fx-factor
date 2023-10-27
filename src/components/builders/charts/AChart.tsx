import React from "react";
import {
    AdvancedRealTimeChart,
    ForexHeatMap,
    TechnicalAnalysis,
    MiniChart
} from "react-ts-tradingview-widgets";
import { Box } from "@mui/material";
import "./charts.scss";

const AChart = () => {
    return (
        <div>
            <Box className="dip-chart">
                <AdvancedRealTimeChart
                    theme="light"
                    width="100%"
                    hide_side_toolbar={true}
                    allow_symbol_change={false}
                />
            </Box>
            <MiniChart colorTheme="light" width="100%" />
            <Box onClick={() => {}} className="test-chart">
                <ForexHeatMap
                    colorTheme="light"
                    width="100%"
                    largeChartUrl="false"
                ></ForexHeatMap>
            </Box>
            <TechnicalAnalysis colorTheme="dark" width="100%"></TechnicalAnalysis>
        </div>
    );
};

export default AChart;
