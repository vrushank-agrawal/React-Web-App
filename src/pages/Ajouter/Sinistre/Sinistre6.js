import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";

// local imports
import { BLACKCN, ORANGE } from "../../../utils/colors";
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";

const Sinistre6FontSize = LITTLE;

const Sinistre6Tile = (props) => {
    return (
    <Grid item xs={12} sm={3} md={3}>
        <Paper elevation={3} style={{ height: "90%", padding: "1rem 2rem" }}>
            {props.children}
        </Paper>
    </Grid>
    );
}

const DisplayTileField = (props) => {
    return (
        <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: Sinistre6FontSize }}>
            {props.text}
        </Typography>
    );
};

// ----------------------------------------------------------
// SinistreTile
// ----------------------------------------------------------

const SinistreTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    VEHICULE
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayTileField text={props.sinistre.nom} />
                <DisplayTileField text={props.sinistre.date} />
                <DisplayTileField text={props.sinistre.vehicule} />
                <DisplayTileField text={props.sinistre.collaborateur} />
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// Contrat Tile
// ----------------------------------------------------------

const DetailTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    {"détail".toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayTileField text={props.detail} />
            </Grid>
        </Grid>
    );
};

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
                <DocumentsTileField fontSize={props.fontSize} text={"CONSTAT"} value={props.docs.constat}/>
                <Divider style={{ backgroundColor: ORANGE }} />
                <DocumentsTileField fontSize={props.fontSize} text={"PROCES VERBAL"} value={props.docs.procesVerbal}/>
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// PhotosTile
// ----------------------------------------------------------

const PhotosTileField = (props) => {
    return (
    <>
        {props.photo}
        {props.notlast && <Divider style={{ backgroundColor: ORANGE }} />}
    </>
    );
};

const PhotosTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    PHOTOS
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            {props.photos.map((photo, index) => (
                <PhotosTileField photo={photo} notlast={index != props.photos.length-1} />
            ))}
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// LocalContent
// ----------------------------------------------------------

const Sinistre6 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"} style={{display:"flex"}}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Sinistre6Tile
                        children={ <SinistreTile sinistre={props.data.sinistre} /> }
                    />
                    <Sinistre6Tile
                        children={ <DetailTile detail={props.data.detail} /> }
                    />
                    <Sinistre6Tile
                        children={ <DocumentsTile docs={props.data.docs} fontSize={Sinistre6FontSize} /> }
                    />
                    <Sinistre6Tile
                        children={ <PhotosTile photos={props.data.photos} /> }
                    />
                </Grid>
            </Grid>

            {/* ------------------------- BUTTONS ---------------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                <Grid container spacing={1.5} direction={"row"} style={{display: "flex", justifyContent: "left"}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <CodenektButton grey
                            title={"Précédent"}
                            onClick={props.onPrevious}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} style={{display: "flex", justifyContent: "right"}}>
                        <CodenektButton
                            title={"Enregistrer et valider"}
                            onClick={props.onComplete}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Sinistre6;