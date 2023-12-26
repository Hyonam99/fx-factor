/******************************************************************************************************************************
 * currently, mocking the trading widget components solved the issue of the "exported component being an invalid element type"
 * however this requires mocking each individual component aavailable in the widget and used in building the application
 * and also involves manually specifying the rendered output of the mocked component, which is to be asserted while testing.
 * NOTE: this is not the best approach, but gives an edge. A better solution will be sorted for this.
 *******************************************************************************************************************************/
const ForexCrossRates = () => {
    return (
        <>
            <div>USD</div>
        </>
    )
}

const AdvancedRealTimeChart = () => {
    return (
        <>
            <div>USDCAD</div>
        </>
    )
}

module.exports = {
    ForexCrossRates,
    AdvancedRealTimeChart
};
