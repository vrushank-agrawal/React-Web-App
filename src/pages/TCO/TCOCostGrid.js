import React from "react";

import { Chip, Grid, Typography } from "@mui/material";

// CodeNekt Imports
import { ORANGELIGHT } from "../../utils/colors";

const TCOChip = (props) => {
    return (
        <Chip
            label={props.label}
            variant='outlined'
            sx={{fontWeight: "bold",
                padding: "0.2rem",
                margin: "auto",
                fontSize: props.fontSize,
                borderColor: ORANGELIGHT,
            }}
        />
    )
}

const TCOCostGrid = (props) => {
    return (
    <>
        <Grid container spacing={2} style={{ marginTop: "0.5rem", justify: "center", marginBottom: "1rem" }}>
            <Grid item xs={12} sm={6} md={6}>
                <Typography variant="h6" style={{ marginLeft: "1rem", fontSize: TCOTableFontsize }}> COÛT TOTAL DU PARC </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TCOChip
                    label="30 212,90 €"
                    fontSize={TCOTableValueSize}
                />
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "0.5rem" }}>
            <Grid item xs={12} sm={6} md={6}>
                <Typography variant="h6" style={{ marginLeft: "1rem", fontSize: TCOTableFontsize }}> COÛT MOYEN PAR VÉHICULE </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TCOChip
                    label="212,90 €"
                    fontSize={TCOTableValueSize}
                />
            </Grid>
        </Grid>
    </>
    );
}

export default TCOCostGrid;