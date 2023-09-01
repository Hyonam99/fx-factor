import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { type MiniCardProps } from "types/interface";

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 600,
    color: theme.palette.text.primary
}));

const MiniCard = (props: MiniCardProps) => {
    const { cardDetails, cardTitle } = props
    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: "auto",
                    p: 2
                }}
            >
                <Box>
                    <Typography>{cardTitle}</Typography>
                </Box>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>FX</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>{cardDetails}</Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    );
}

export default MiniCard
