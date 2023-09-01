import React from "react";
import { Hero, MarketPricing, Marquee, Courses, Featured, Community, Testimonial } from "components/components-exports";

const HomePage = (): React.JSX.Element => {
    return (
        <>
            <Hero />
            <MarketPricing />
            <Courses limit={3}/>
            <Marquee />
            <Featured />
            <Community />
            <Testimonial />
        </>
    )
};

export default HomePage;
