import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Divider, IconButton } from "@mui/material";

import CodeNektButton from "../../Components/CodeNektButton";
import { BLACKCN, ORANGELIGHT, ORANGE, WHITECN, BLUECN } from "../../utils/colors";
import { LITTLE2 } from "../../utils/fontSize";
import { CodeNektLeft, CodeNektProfile, CodeNektEye, CodeNektAdd, CodeNektEdit, CodeNektDocument } from "../../Components/CodeNektIcons";
import { LinkSinistre, LinkVoirSinistre } from "../../Components/CodeNektPageLinks";
import IconWithBackground from "./IconWithBackground";

const FontSize = LITTLE2;
const IconRadius = "1rem";
const IconSize = 12;

// ----------------------------------------------------------
// Styles
// ----------------------------------------------------------

export const ItemRowPadding = {padding: '0.4rem 1rem 0.2rem 2rem'};
export const HeaderRowPadding = {padding: "0"}

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
        fontSize={props.fontSize ?? FontSize}
        padding={"0.8rem"}
        startIcon={props.startIcon}
        title={props.title}
        to={props.to}
        width={props.width}
    />
    );
}

export const VoirButtonTransparent = (props) => {
    return(
    <CodeNektButton white
        alignSelf={"left"}
        bgcolor={WHITECN}
        boxShadow={"none"}
        title={props.title}
        to={props.to}
    />
    );
}

// ----------------------------------------------------------
// Voir Tile Layout
// ----------------------------------------------------------

export const VoirTileLayout = (props) => {
    const HeaderColSize = props.small ? 10 : 11;

    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{...HeaderRowPadding, fontSize: FontSize}}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={HeaderColSize} sm={HeaderColSize} md={HeaderColSize}>
                        <Typography variant="h6"
                            style={{
                            fontWeight: "bold",
                            textAlign: "left",
                            color: BLACKCN,
                            paddingLeft: "1.5rem"
                        }}>
                            {props.title.toLocaleUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        {props.icon && <IconWithBackground icon={props.icon} />}
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: ORANGE, }} />

            <Grid item xs={12} sm={12} md={12} style={ItemRowPadding}>
                {props.children}
            </Grid>

        </Grid>
    </Paper>
    );
};

// ----------------------------------------------------------
// Voir Tile Layout Profile
// ----------------------------------------------------------

export const VoirTileProfile = (props) => {
    const HeaderPadding = props.vehicule ? HeaderRowPadding : {paddingBottom: "1rem"};

    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"row"} style={HeaderPadding}>

            <Grid item xs={12} sm={4} md={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {props.icon}
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        {props.heading}
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} style={{marginLeft: "auto"}}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize/1.4} iconRadius={IconRadius} />} />
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", marginBottom: "0.2rem"}} />

                {props.content}

            </Grid>

        </Grid>
    </Paper>
    );
};

// ----------------------------------------------------------
// Collaborateur
// ----------------------------------------------------------

export const CollaboratorTile = (props) => {
    return (
    <VoirTileProfile
        icon={<CodeNektProfile size={200} />}
        heading={
            <Typography variant="h6" style={{fontWeight: "bold" }}>
                COLLABORATEUR
            </Typography>
        }
        content={
            <>
                <Typography variant="h6" style={{fontSize: FontSize}}>
                    {props.collaborateur.categorie}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize}}>
                    {props.collaborateur.prenom}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize}}>
                    {props.collaborateur.nom}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize}}>
                    {props.collaborateur.email}
                </Typography>
                <Typography variant="h6" style={{fontSize: FontSize, marginTop: "4rem", marginBottom: "0.5rem" }}>
                    Avantage : {props.collaborateur.denomination} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.collaborateur.montant} € {props.collaborateur.freq}
                </Typography>
            </>
        }
    />
    );
};

// ----------------------------------------------------------
// Documents
// ----------------------------------------------------------

const DocumentsTileField = (props) => {
    const size = props.fontSize ?? FontSize;

    return (
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0 0 0"}}>
            <Grid container spacing={1} direction={"row"} style={{ padding: "0.3rem 0" }}>

                <Grid item xs={12} sm={1.5} md={1.5}>
                    <CodeNektDocument fontSize={size} />
                </Grid>

                <Grid item xs={12} sm={8.5} md={8.5}>
                    <Typography style={{ textAlign: "left", fontSize: size }}>
                        {props.text.toLocaleUpperCase()}
                    </Typography>
                    <Typography style={{ textAlign: "left" , fontSize: size/1.5}} >
                        {props.value}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2} md={2}>
                    <CodeNektEye fontSize={size} />
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
    <VoirTileLayout small
        title="DOCUMENTS"
        icon={<CodeNektAdd size={IconSize}/>}
        children=
        {
            docs.map((document, index) => (
            <>
                <DocumentsTileField
                    fontSize={props.fontSize}
                    key={index}
                    text={document.text}
                    value={document.value}
                />
                {index < (docs.length - 1) && <Divider style={{ backgroundColor: ORANGE, }} />}
            </>
        ))}
    />
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
                    {props.sinistre.Date} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.sinistre.Nom} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.sinistre.Statut}
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
    <VoirTileLayout
        title="SINISTRES"
        icon={<CodeNektAdd size={IconSize}/>}
        children={
        <>
            <Grid item xs={12} sm={12} md={12}>
                {props.sinistres.map((sinistre, index) => (
                    <SinistreTileField
                        index={index}
                        sinistre={sinistre}
                        sinistresLength={props.sinistres.length}
                    />
                ))}
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <VoirButtonTransparent
                    title="Voir toutes les sinistres"
                    to={LinkSinistre}
                />
            </Grid>
        </>
        }
    />
    );
};