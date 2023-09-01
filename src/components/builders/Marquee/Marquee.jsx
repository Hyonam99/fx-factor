import React from "react";
import './marquee.scss'

const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Marquee = () => {
    return (
        <section className="marquee-slider-container">
            <div className="marquee-slide-track-left">
                {demo.map((item) => (
                    <div className="marquee-slide" key={item}>
                        <img src="https://img.freepik.com/free-vector/vintage-strong-red-bull-head_225004-1579.jpg?w=740&t=st=1693256650~exp=1693257250~hmac=b9b999146af0b1ae5d56c2e4ed1f7bb330b614b7f5df1aae51071fb2087ba713" alt="" />
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Marquee;
