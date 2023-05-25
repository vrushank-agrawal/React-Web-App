import React from "react";
import { Grid, Paper, Typography, Divider, Box, Icon } from "@mui/material";

import { BLACKCN, ORANGELIGHT, ORANGE, WHITECN, BLUECN } from "../../utils/colors";
import { LITTLE, LITTLE2, MINIBIG } from "../../utils/fontSize";
import { CodeNektProfile, CodeNektEye, CodeNektAdd, CodeNektEdit } from "../../Components/CodeNektIcons";
import CodeNektButton from "../../Components/CodeNektButton";
import { LinkSinistre } from "../../Components/CodeNektPageLinks";

const FontSize = LITTLE2;
const IconRadius = "1rem";
const IconSize = 12;

const IconWithBackground = (props) => {
    return (
        <Box>
            <Box sx={{
                alignItems: "center",
                backgroundColor: BLUECN,
                borderRadius: "50%",
                display: "flex",
                height: IconRadius,
                justifyContent: "center",
                margin: "0.5rem 0",
                width: IconRadius,
            }}>
                {props.icon}
            </Box>
        </Box>
    );
};

// ----------------------------------------------------------
// Collaborateur
// ----------------------------------------------------------

const CollaboratorTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"row"} style={{padding: "1rem"}}>

            <Grid item xs={12} sm={4} md={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CodeNektProfile size={200} />
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", margin: "0" }}>
                            COLLABORATEUR
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} style={{marginLeft: "auto"}}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize} />} />
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", marginBottom: "1rem"}} />

                <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                    {props.collaborateur.cat}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                    {props.collaborateur.prenom}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                    {props.collaborateur.nom}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                    {props.collaborateur.email}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize, marginTop: "4rem", marginBottom: "2rem" }}>
                    Avantage : {props.collaborateur.denomination} | {props.collaborateur.montant} € {props.collaborateur.freq}
                </Typography>
            </Grid>

        </Grid>
    </Paper>
    );
};

// ----------------------------------------------------------
// Documents
// ----------------------------------------------------------

const DocumentsTileField = (props) => {
    return (
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0"}}>
            <Grid container spacing={1} direction={"row"} style={{ padding: "0.3rem 0" }}>

                <Grid item xs={12} sm={10} md={10}>
                    <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: props.fontSize }}>
                        {props.text.toLocaleUpperCase()}
                    </Typography>
                    <Typography color={BLACKCN} style={{ textAlign: "left" , fontSize: props.fontSize/1.2}} >
                        {props.value}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2} md={2}>
                    <CodeNektEye fontSize={props.fontSize} />
                </Grid>

            </Grid>
        </Grid>
    );
};

const DocumentsTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{ padding: "0.5rem 1rem", }}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN }}>
                            DOCUMENTS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: ORANGE, }} />

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
    </Paper>
    );
};

// ----------------------------------------------------------
// Sinistre
// ----------------------------------------------------------

const SinistreTileField = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}}>
            <Grid item xs={12} sm={11} md={11}>
                <Typography variant="h6" style={{margin: "0.4rem 0", fontSize: FontSize, textAlign: "left", color: BLACKCN }}>
                    {props.sinistre.Date} | {props.sinistre.Nom} | {props.sinistre.Statut}
                </Typography>
            {props.index !== props.sinistresLength - 1 &&
            <Divider sx={{ backgroundColor: ORANGE, width: "108%"}} />
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1} style={{display: "flex", alignItems: "center"}}>
                <CodeNektEye size={20} />
            </Grid>
        </Grid>
    );
};


const SinistreTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{padding: "0.5rem 1rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}}>
                    <Grid item xs={12} sm={11} md={11} style={{display: "flex", alignItems: "center", paddingLeft: "1rem"}}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN }}>
                            SINISTRES
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: ORANGE, width: "100%"}} />
            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "4rem", paddingLeft: "1rem"}}>
                {props.sinistres.map((sinistre, index) => (
                    <SinistreTileField
                        index={index}
                        sinistre={sinistre}
                        sinistresLength={props.sinistres.length}
                    />
                ))}
            </Grid>
            <CodeNektButton white
                alignSelf={"left"}
                bgcolor={WHITECN}
                boxShadow={"none"}
                title="Voir toutes les sinistres"
                to={LinkSinistre}
            />
        </Grid>
    </Paper>
    );
};

export { CollaboratorTile , DocumentsTile, SinistreTile };