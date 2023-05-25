import React from "react";
import { Chip, Grid, Paper, Typography } from "@mui/material";
import { BLACKCN, ORANGELIGHT } from "../../utils/colors";
import { LITTLE } from "../../utils/fontSize";

// CodeNekt imports

const TCOHeaderItem = (props) => {
    return (
    <>
        <Grid item xs={12} sm={1} md={1}>
            <Typography variant="h6" sx={{ color: "white", fontSize: LITTLE }}>
                {props.description}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
            <Chip
                label={props.value}
                variant="outlined"
                sx={{
                    borderColor: ORANGELIGHT,
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    padding: "0.2rem",
                    color: "white",
                }}
            />
        </Grid>
    </>
    );
};

const TCOHeader = (props) => {
    return (
        <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: BLACKCN, }}
                elevation={3}
        >
            <Grid container spacing={3} sx={{alignItems: "center", }}>
                <TCOHeaderItem description="COUT MOYEN MENSUEL" value={props.moyen} />
                <TCOHeaderItem description="COUT TOTAL MENSUEL" value={props.total} />
            </Grid>
        </Paper>
    );
};

export default TCOHeader;