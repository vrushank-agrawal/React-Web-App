import React from "react";
import { Paper, Typography, Grid, Divider, Chip } from "@mui/material";

import { ORANGELIGHT } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";

const TCOTableValueSize = "1.2rem";
const TCOTableFontsize = "14px";

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

const TCOButton = () => {
    return (
        <CodenektButton
            title={"VOIR LE COÛT PAR VÉHICULE"}
            width={"fit-content"}
            bold={true}
            blue={true}
            padding={"0.5rem"}
            margin={"1rem auto auto auto"}
            height={"fit-content"}
        />
    )
}

const TCOTable = () => {
    return (
        <Paper elevation={3}
            style={{ width: "100%", height: "100%", paddingBottom: "1rem",
                display: "flex", justifyContent: "center", flexDirection: "column"
        }}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding: "1rem" }}> TCO par mois </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
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
            <TCOButton />
        </Paper>
    )
}

export default TCOTable;