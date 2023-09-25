import React from "react";
// import { useGetLatestPrice } from "api/hooks/forexHook";
import './marquee.scss'
// import { type ForexPricePairs } from "types/types";

const Marquee = () => {
    // const fxDt = useGetLatestPrice()
    const demo = Array.from({ length: 22 }, (k) => k)

    // useEffect(() => {
    //     // fxDt.call()
    // }, [])
    return (
        <section className="marquee-slider-container">
            <div className="marquee-slide-track-left">
                {demo.map((item: any, i: number) => (
                    <div className="marquee-slide" key={`currency-${i + 1}`}>
                        <div>
                            <h3>EUR/USD</h3>
                            <p>1.01245</p>
                        </div>
                        <div>
                            <span>
                                <p>Ask</p>
                                <small>3.50</small>
                            </span>
                            <span>
                                <p>Bid</p>
                                <small>5.50</small>
                            </span>
                            <span>
                                <p>spread</p>
                                <small>7.32</small>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Marquee;
