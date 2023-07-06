import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// CodeNekt imports
import { LITTLE } from "../../../utils/fontSize";
import Circle from "./HeaderCircle";

const DisplayHeader = (props) => {
    const NbCircles = props.circles;
    const GridLength = 12 / NbCircles;
    return (
        <Paper elevation={0} style={{
            alignItems: 'center',
            background: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '1rem',
        }}>
            <Grid container spacing={1.5}>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5}>
                    {[...Array(NbCircles)].map((_, index) => (
                        <React.Fragment key={index+1}>
                            <Grid item xs={12} sm={GridLength} md={GridLength}>
                                <Circle
                                    image={index+1 === NbCircles && <CheckBoxIcon />}
                                    number={index+1}
                                    page={props.page}
                                    text={props.text}
                                />
                            </Grid>
                        </React.Fragment>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5}>
                    {[...Array(NbCircles)].map((_, index) => (
                        <React.Fragment key={index+1}>
                            <Grid item xs={12} sm={GridLength} md={GridLength}
                                sx={{display: "flex", justifyContent: "center"}}
                            >
                                <Typography
                                    color="textSecondary"
                                    fontSize={LITTLE}
                                    justifyContent={"center"}
                                    textAlign={"center"}
                                    variant="body2"
                                >
                                    {index+1 === props.page ? props.text : ""}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default DisplayHeader;