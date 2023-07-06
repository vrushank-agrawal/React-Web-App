import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { BLACKCN, WHITECN } from "../../utils/colors";
import { LITTLE } from "../../utils/fontSize";
import TCOChip from "../utils/TCOChip";

// CodeNekt imports

const TCOHeaderItem = (props) => {
    const FirstCol = props.firstCol ?? 1;
    const SecondCol = props.secondCol ?? 2;

    return (
    <>
        <Grid item xs={12} sm={FirstCol} md={FirstCol}>
            <Typography variant="h6" sx={{ color: "white", fontSize: LITTLE }}>
                {props.description}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={SecondCol} md={SecondCol}>
            <TCOChip
                color={WHITECN}
                fontSize={"1.2rem"}
                label={props.value}
            />
        </Grid>
    </>
    );
};

const TCOHeader = (props) => {
    return (
        <Paper sx={{ borderRadius: 2, backgroundColor: BLACKCN, }}
                elevation={3}
        >
            <Grid container spacing={1} sx={{alignItems: "center", p: "0 2rem 0.5rem 2rem"}}>
                <TCOHeaderItem description="COUT MOYEN MENSUEL" value={props.moyen} firstCol={props.firstCol} secondCol={props.secondCol}/>
                <TCOHeaderItem description="COUT TOTAL MENSUEL" value={props.total} firstCol={props.firstCol} secondCol={props.secondCol}/>
            </Grid>
        </Paper>
    );
};

export default TCOHeader;