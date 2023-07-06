import React from "react";
import { Grid, Paper, Typography, Divider } from "@mui/material";

import { BLACKCN, BLUECN, ORANGE, ORANGEDARK, ORANGELIGHT, WHITECN } from "../../utils/colors";
import { DocumentsTile as DocTile } from "../utils/VoirPageUtils";
import { CodeNektEdit } from "../../Components/CodeNektIcons";
import IconWithBackground from "../utils/IconWithBackground";
import CodenektButton from "../../Components/CodeNektButton";
import { LinkVoirCollab } from "../../Components/CodeNektPageLinks";

const IconSize = 12;

// ----------------------------------------------------------
// Documents
// ----------------------------------------------------------

const DocumentsTile = (props) => {
    return(
        <DocTile
            documents={props.documents}
            fontSize={props.fontSize}
        />
    )
}

// ----------------------------------------------------------
// Collaborateur
// ----------------------------------------------------------

const CollaborateurTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{ padding: "0.5rem 1.5rem 1rem 1.5rem", }}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN }}>
                            COLLABORATEUR
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: ORANGE, }} />

            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0", fontSize: props.fontSize }}>
                    {props.collaborateur.categorie}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.prenom}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.nom}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.email}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.siteHanes}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.permisNumero}
                </Typography>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0" , fontSize: props.fontSize}} >
                    {props.collaborateur.tempAffectation}
                </Typography>
                <CodenektButton gradient bold
                    dir={"to right"}
                    left={ORANGEDARK}
                    right={ORANGELIGHT}
                    margin={"0.8rem 0"}
                    title={"Voir la fiche collaborateur"}
                    to={LinkVoirCollab}
                />
            </Grid>

        </Grid>
    </Paper>
    );
};

// ----------------------------------------------------------
// Information Tile
// ----------------------------------------------------------

const InformationTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" style={{backgroundColor: BLUECN, width: "100%"}}>
        <Grid container spacing={1} direction={"column"} style={{ padding: "0.5rem 1.5rem 1rem 1.5rem", }}>

            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN }}>
                    INFORMATIONS
                </Typography>
            </Grid>

            <Divider style={{ backgroundColor: WHITECN, }} />

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography color={BLACKCN} style={{ margin: "0.2rem 0", fontSize: props.fontSize }}>
                            {props.information.dateIntervention}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography color={BLACKCN} style={{ margin: "0.2rem 0", fontSize: props.fontSize }}>
                            {props.information.intervantion}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color={BLACKCN} style={{ margin: "0.2rem 0", fontSize: props.fontSize }}>
                    {props.information.dateSinistre}
                </Typography>
            </Grid>

        </Grid>
    </Paper>
    );
};

export { DocumentsTile, CollaborateurTile, InformationTile};
