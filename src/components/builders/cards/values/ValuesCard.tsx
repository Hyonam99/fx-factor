import React from "react";
import { Card, CardActionArea, Typography, CardMedia, CardContent, Box } from "@mui/material";
import { type MiniCardProps } from "types/interface";

const ValuesCard = (props: MiniCardProps): React.JSX.Element => {
    const { cardDetails, cardTitle, imageUrl } = props
    return (
        <Card sx={{ height: 390 }} className='values-card-container'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={imageUrl}
                    alt="our-mission-value"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {cardTitle}
                    </Typography>
                    <Box className='values-card-text'>
                        <Typography variant="body2" color="text.secondary" textOverflow="scroll">
                            {cardDetails}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default ValuesCard;
