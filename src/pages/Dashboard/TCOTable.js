import React from "react";
import { Paper, Typography, Grid, Divider, Chip } from "@mui/material";

import { ORANGELIGHT, WHITECN } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";
import { CodeNektEye } from "../../Components/CodeNektIcons";
import { LinkTCO } from "../../Components/CodeNektPageLinks";
import { TablePaperStyle } from "./Styles";
import TCOChip from "../utils/TCOChip";

const TCOTableValueSize = "1.2rem";
const TCOTableFontsize = "14px";

const TCOButton = () => {
    return (
        <CodenektButton
        blue={true}
        bold={true}
        color={WHITECN}
        height={"fit-content"}
            margin={"1rem auto auto auto"}
            padding={"0.1rem 1rem"}
            startIcon={<CodeNektEye size={12}/>}
            title={"VOIR LE COÛT PAR VÉHICULE"}
            to={LinkTCO}
            width={"fit-content"}
        />
    )
}

const TCOTableField = (props) => {
    return(
    <Grid container spacing={2} style={{ margin: "0.5rem 0", justify: "center" }}>
        <Grid item xs={12} sm={5} md={5}>
            <Typography variant="h6" style={{ marginLeft: "2rem", fontSize: TCOTableFontsize }}>
                {props.title}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TCOChip
                label={props.label}
                fontSize={TCOTableValueSize}
            />
        </Grid>
        <Grid item xs={0} sm={0} md={1} />
    </Grid>
    );
}

const TCOTable = () => {
    return (
        <Paper elevation={3} style={TablePaperStyle}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding: "1rem", marginLeft: "2rem" }}>
                TCO par mois
            </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
            <TCOTableField title="COÛT TOTAL DU PARC" label="30 214,50 €" />
            <TCOTableField title="COÛT MOYEN PAR VÉHICULE" label="2 517,90 €" />
            <TCOButton />
        </Paper>
    )
}

export default TCOTable;