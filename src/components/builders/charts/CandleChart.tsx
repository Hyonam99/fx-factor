/* eslint-disable react/prop-types */
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const ChartComponent = (props: any) => {
    const {
        data,
        colors: {
            backgroundColor = '#222',
            lineColor = '#2962FF',
            textColor = '#ddd',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)'
        } = {}
    } = props;

    const chartContainerRef = useRef<any>();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
            };

            const chart = createChart(chartContainerRef?.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor
                },
                grid: {
                    vertLines: { color: '#444' },
                    horzLines: { color: '#444' }
                },
                width: chartContainerRef.current.clientWidth,
                height: 360
            });
            chart.timeScale().fitContent();
            chart.priceScale("right").applyOptions({
                borderColor: '#71649C'
            });
            // Setting the border color for the horizontal axis
            chart.timeScale().applyOptions({
                borderColor: '#71649C'
            });

            // const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            // newSeries.setData(data);

            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderVisible: false,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350'
            });

            const lineData = data.map((datapoint: { time: string, close: number, open: number }) => ({
                time: datapoint.time,
                value: (datapoint.close + datapoint.open) / 2
            }));
            const areaSeries = chart.addAreaSeries({
                lastValueVisible: false, // hide the last value marker for this series
                crosshairMarkerVisible: false, // hide the crosshair marker for this series
                lineColor: 'transparent', // hide the line
                topColor: 'rgba(56, 33, 110,0.6)',
                bottomColor: 'rgba(56, 33, 110, 0.1)'
            });

            candlestickSeries.setData(data);

            // Set the data for the Area Series
            areaSeries.setData(lineData);
            // // sometime later

            // // update the most recent bar
            // candlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });

            // // creating the new bar
            // candlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

export default ChartComponent

// export function App (props) {
//     return (
//         <ChartComponent {...props} data={initialData}></ChartComponent>
//     );
// }
