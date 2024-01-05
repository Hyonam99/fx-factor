import React from "react";
import { Box, Container } from "@mui/material";
import { ValuesCard } from "components/components-exports";

import './about-page.scss'

const AboutPage = (): React.JSX.Element => {
    return (
        <Container maxWidth={false} className="about-container" data-testid="about-container">
            <Box className="about-container_text-wrapper">
                <h1>The Fx Factor: A key, a family.</h1>
                <p>
                    {`At The Fx Factor, we're more than just a forex community; 
                    we're a dynamic force driven by a passion for trading the financial 
                    markets. Our journey began on June 2nd, 2022, fueled by the desire to 
                    empower individuals with the knowledge and skills to succeed in forex trading. 
                    We're here to revolutionize the way you approach trading and to unlock the 
                    incredible opportunities the financial markets have to offer.6`}
                </p>
            </Box>
            <Box className="about-container_core-values">
                <ValuesCard
                    cardTitle="Our Story"
                    cardDetails={`The Fx Factor was created for the sole reason of reaching out 
                    to people and tutoring them. There are so many opportunities to be gained from 
                    knowing how to trade the financial market. Hence, we intend to share these 
                    opportunities by instilling knowledge in people while sharing our day-to-day 
                    trading activities with one another.`}
                    imageUrl="https://res.cloudinary.com/maesan-product/image/upload/v1698512018/fx-factor/fx-factor-story_huengl.jpg"
                />
                <ValuesCard
                    cardTitle="Our Mission"
                    cardDetails={`Our primary mission is to educate and empower people with the 
                    knowledge and skills needed to excel in the world of forex trading. 
                    We firmly believe that by imparting the right knowledge, we can unlock the 
                    immense potential of the financial markets and create life-changing opportunities 
                    for our community members.`}
                    imageUrl="https://res.cloudinary.com/maesan-product/image/upload/v1693229033/fx-factor/community-bg_avekup.jpg"
                />
                <ValuesCard
                    cardTitle="What Sets Us Apart"
                    cardDetails={`At The Fx Factor, we go beyond traditional learning. We are a thriving 
                    community where traders come together to share ideas, explore innovative techniques 
                    for analyzing the forex market, and document their journey to profitability. 
                    We understand that the world of forex trading is dynamic, and through collective wisdom, 
                    we aim to stay at the forefront of the industry.`}
                    imageUrl="https://res.cloudinary.com/maesan-product/image/upload/v1693229035/fx-factor/business-man_fifofz.jpg"
                />
                <ValuesCard
                    cardTitle="Our Goal"
                    cardDetails={`Our ambition knows no bounds. We aspire to become the premier 
                    forex community not only in Africa but on a global scale. Our commitment to 
                    achieving this goal is reflected in our dedication to tutoring, providing accurate 
                    trading signals, and exploring the use of trading bots, among other cutting-edge approaches`}
                    imageUrl="https://res.cloudinary.com/maesan-product/image/upload/v1693229032/fx-factor/hero-bg-chart_qvntqy.jpg"
                />
            </Box>
            <Box>
                <p>
                    {`Whether you're a seasoned trader or just starting your forex journey, 
                    The Fx Factor welcomes you with open arms. Here, you'll find a supportive community 
                    that shares knowledge, fosters innovation, and strives for excellence in the forex world. 
                    Together, we can navigate the markets, seize opportunities, and achieve financial success.`}
                </p>
                <p>We grow together, learn together and profit together.</p>
            </Box>
        </Container>
    )
};

export default AboutPage;
