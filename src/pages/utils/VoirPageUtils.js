import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Divider, IconButton } from "@mui/material";

import CodeNektButton from "../../Components/CodeNektButton";
import { BLACKCN, ORANGELIGHT, ORANGE, WHITECN, BLUECN } from "../../utils/colors";
import { LITTLE, LITTLE2, MINIBIG } from "../../utils/fontSize";
import { CodeNektLeft, CodeNektProfile, CodeNektEye, CodeNektAdd, CodeNektEdit, CodeNektDocument } from "../../Components/CodeNektIcons";
import { LinkSinistre, LinkVoirSinistre } from "../../Components/CodeNektPageLinks";
import IconWithBackground from "./IconWithBackground";

const FontSize = LITTLE2;
const IconRadius = "1rem";
const IconSize = 12;

// ----------------------------------------------------------
// Buttons
// ----------------------------------------------------------

export const RetourButton = (props) => {
    return(
    <CodeNektButton transparent
        border={"1px solid"}
        borderColor={WHITECN}
        color={WHITECN}
        marginLeft={"auto"}
        padding={"0.8rem"}
        startIcon={<CodeNektLeft size={15} />}
        title={props.title}
        to={props.to}
        width={"fit-content"}
    />
    );
}

export const VoirButton = (props) => {
    return(
    <CodeNektButton blue
        color={WHITECN}
        fontSize={props.fontSize}
        padding={"0.8rem"}
        startIcon={props.startIcon}
        title={props.title}
        width={props.width}
    />
    );
}

// ----------------------------------------------------------
// Collaborateur
// ----------------------------------------------------------

export const CollaboratorTile = (props) => {
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
                        <IconWithBackground icon={<CodeNektEdit size={IconSize/1.4} iconRadius={IconRadius} />} />
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
                    Avantage : {props.collaborateur.denomination} &nbsp;&nbsp; | &nbsp;&nbsp; {props.collaborateur.montant} € {props.collaborateur.freq}
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
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0 0 0"}}>
            <Grid container spacing={1} direction={"row"} style={{ padding: "0.3rem 0" }}>

                <Grid item xs={12} sm={1.5} md={1.5}>
                    <CodeNektDocument fontSize={props.fontSize} />
                </Grid>

                <Grid item xs={12} sm={8.5} md={8.5}>
                    <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: props.fontSize }}>
                        {props.text.toLocaleUpperCase()}
                    </Typography>
                    <Typography color={BLACKCN} style={{ textAlign: "left" , fontSize: props.fontSize/1.5}} >
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

const docsData = [
    { text: "carte identité", value: "123456"},
    { text: "permis", value: "123456"},
    { text: "carte", value: "123456"},
    { text: "badge", value: "123456"},
];

export const DocumentsTile = (props) => {

    const docs = props.documents ?? docsData;

    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{ padding: "0.5rem 0", }}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN, paddingLeft: "1.5rem" }}>
                            DOCUMENTS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd size={IconSize} iconRadius={IconRadius}/>} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: ORANGE, }} />

            <Grid item xs={12} sm={12} md={12} style={{padding: "0 1.5rem"}}>
            {docs.map((document, index) => (
            <>
                <DocumentsTileField fontSize={props.fontSize} text={document.text} value={document.value} key={index}/>
                {index < (docs.length - 1) && <Divider style={{ backgroundColor: ORANGE, }} />}
            </>
            ))}
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
                    {props.sinistre.Date} &nbsp;&nbsp; | &nbsp;&nbsp; {props.sinistre.Nom} &nbsp;&nbsp; | &nbsp;&nbsp; {props.sinistre.Statut}
                </Typography>
            {props.index !== props.sinistresLength - 1 &&
            <Divider sx={{ backgroundColor: ORANGE, width: "108%"}} />
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1} style={{display: "flex", alignItems: "center"}}>
                <Link to={LinkVoirSinistre}> <IconButton> <CodeNektEye size={20} /> </IconButton> </Link>
            </Grid>
        </Grid>
    );
};


export const SinistreTile = (props) => {
    return (
    <Paper elevation={3}>
        <Grid container spacing={1} direction={"column"} style={{padding: "0.5rem 0"}}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}}>
                    <Grid item xs={12} sm={11} md={11} style={{display: "flex", alignItems: "center", paddingLeft: "2rem"}}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN}}>
                            SINISTRES
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd size={IconSize} iconRadius={IconRadius}/>} />
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: ORANGE, width: "100%"}} />
            <Grid item xs={12} sm={12} md={12} style={{padding: "0.5rem 2rem"}}>
                {props.sinistres.map((sinistre, index) => (
                    <SinistreTileField
                        index={index}
                        sinistre={sinistre}
                        sinistresLength={props.sinistres.length}
                    />
                ))}
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{padding: "0 0.8rem"}}>
                <CodeNektButton white
                    alignSelf={"left"}
                    bgcolor={WHITECN}
                    boxShadow={"none"}
                    title="Voir toutes les sinistres"
                    to={LinkSinistre}
                />
            </Grid>
        </Grid>
    </Paper>
    );
};