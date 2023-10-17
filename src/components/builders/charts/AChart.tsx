import React from 'react';
import { AdvancedRealTimeChart, ForexHeatMap, TechnicalAnalysis } from "react-ts-tradingview-widgets";

const AChart = () => {

    return (
        <div>
            <AdvancedRealTimeChart theme="light" width="100%" hide_side_toolbar={true}></AdvancedRealTimeChart>
            <ForexHeatMap colorTheme="light" width="100%"></ForexHeatMap>
            <TechnicalAnalysis colorTheme="dark" width="100%"></TechnicalAnalysis>
        </div>
    );
}

export default AChart
