import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Paper, Divider, Typography } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// CodeNekt imports
import { LITTLE } from "../../../utils/fontSize";
import Circle from "./HeaderCircle";

const HeaderContainer = styled(Paper)(({ theme }) => ({
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    elevation: '0',
    justifyContent: 'center',
    padding: theme.spacing(1),
}));

const DisplayHeader = (props) => {
    const NbCircles = props.circles;
    const GridLength = 12 / NbCircles;
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    );
};

export default DisplayHeader;