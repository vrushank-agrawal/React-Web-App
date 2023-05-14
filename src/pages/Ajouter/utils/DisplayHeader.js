import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Paper, Divider, Typography } from "@mui/material";

// CodeNekt imports
import { ORANGELIGHT } from "../../../utils/colors";
import { LITTLE } from "../../../utils/fontSize";
import Circle from "./HeaderCircle";


const HeaderContainer = styled(Paper)(({ theme }) => ({
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
}));

const CircleDivider = styled(Divider)({
    backgroundColor: ORANGELIGHT,
    border: "none",
    flexGrow: 1,
    // height: "1%",
    margin: "0",
});

const DisplayHeader = (props) => {
    const CirclesText = props.CirclesText;
    const NbCircles = CirclesText.length;
    const GridLength = 12 / NbCircles;
    return (
        <HeaderContainer>
            <Grid container spacing={1.5} direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5} direction={"row"}>
                    {CirclesText.map((circle, index) => (
                        <React.Fragment key={circle.number}>
                            <Grid item xs={12} sm={GridLength} md={GridLength}>
                                <Circle
                                    number={circle.number == NbCircles ? "✔" : circle.number}
                                    text={circle.text}
                                    page={props.page}
                                />
                                {/* {index !== NbCircles - 1 && <CircleDivider />} */}
                            </Grid>
                        </React.Fragment>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5} direction={"row"} >
                    {CirclesText.map((circle, index) => (
                        <React.Fragment key={circle.number}>
                            <Grid item xs={12} sm={GridLength} md={GridLength}
                                sx={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}
                            >
                                <Typography
                                    color="textSecondary"
                                    fontSize={LITTLE}
                                    justifyContent={"center"}
                                    textAlign={"center"}
                                    variant="body2"
                                >
                                    {circle.number == props.page ? circle.text : ""}
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