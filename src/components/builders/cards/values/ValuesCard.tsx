import React from "react";
import { Card, CardActionArea, Typography, CardMedia, CardContent } from "@mui/material";
import { type MiniCardProps } from "types/interface";

const ValuesCard = (props: MiniCardProps): React.JSX.Element => {
    const { cardDetails, cardTitle } = props
    return (
        <Card sx={{ height: 330 }} className='values-card-container'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/analyst-single_zduhnj.jpg"
                    alt="our-mission-value"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardDetails}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default ValuesCard;
