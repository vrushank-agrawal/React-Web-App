import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

// CodeNekt imports
import { BLACKCN, ORANGE } from "../../utils/colors";
import { MINIBIG } from "../../utils/fontSize";

// ----------------------------------------------------------
// DocumentsTile
// ----------------------------------------------------------

const DocumentsTileField = (props) => {
    return (
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0"}}>
            <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: props.fontSize }}>
                {props.text.toLocaleUpperCase()}
            </Typography>
            <Typography color={BLACKCN} style={{ textAlign: "left" , fontSize: props.fontSize/1.2}} >
                {props.value}
            </Typography>
        </Grid>
    );
};

const DocumentsTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    DOCUMENTS
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DocumentsTileField fontSize={props.fontSize} text={"Carte d'identité"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField fontSize={props.fontSize} text={"Permis"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField fontSize={props.fontSize} text={"Carte Essence"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField fontSize={props.fontSize} text={"Télepéage"} value={"random value"}/>
            </Grid>
        </Grid>
    );
};

export default DocumentsTile;