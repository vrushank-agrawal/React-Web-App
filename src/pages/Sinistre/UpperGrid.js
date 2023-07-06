import React from "react";
import { Box, Chip, Divider, Grid, Paper, Typography } from "@mui/material";

import { BLACKCN, GREYBACK, ORANGE } from "../../utils/colors";
import { LinkVoirVehicule } from "../../Components/CodeNektPageLinks";
import IconWithBackground from "../utils/IconWithBackground";
import { CodeNektAdd, CodeNektEye } from "../../Components/CodeNektIcons";
import { VoirButton, VoirTileLayout, VoirTileProfile } from "../utils/VoirPageUtils";

const IconSize = 12;

// ----------------------------------------------------------
// Sinistre Tile
// ----------------------------------------------------------

const SinistreTile = (props) => {
    return (
    <VoirTileProfile
        icon={
            <Box
                alignItems="center"
                backgroundColor={GREYBACK}
                borderRadius="50%"
                color={BLACKCN}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                minHeight={"10rem"}
                minWidth={"10rem"}
            >
                <Typography variant="h6" style={{fontWeight: "bold", margin: "0" }}>
                    {props.sinistre.vehicule}
                </Typography>
                <VoirButton
                    fontSize={props.fontSize}
                    title={"Voir le véhicule"}
                    to={LinkVoirVehicule}
                />
            </Box>
        }
        heading={
            <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                <Grid item xs={12} sm={3} md={3}>
                    <Typography variant="h6" style={{fontWeight: "bold", margin: "0" }}>
                        SINISTRE
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={7} md={7} style={{display: "flex", alignSelf: "center"}}>
                    <Chip label={props.sinistre.statut} style={{backgroundColor: ORANGE, color: BLACKCN, height: "fit-content"}} />
                </Grid>
            </Grid>
        }
        content={
        <>
            <Typography variant="h6" style={{fontSize: props.fontSize, margin: "0", fontWeight: "bold" }}>
                INFORMATION SINISTRE
            </Typography>
            <Typography variant="h6" style={{fontSize: props.fontSize, margin: "0" }}>
                Date du sinistre: {props.sinistre.date}
            </Typography>
            <Typography variant="h6" style={{fontSize: props.fontSize, padding: "0 0.5rem 0 0" }}>
                {props.sinistre.commentaire}
            </Typography>
        </>
        }
    />
    );
};


// ----------------------------------------------------------
// Photos Tile
// ----------------------------------------------------------

const PhotosTileField = (props) => {
    return (
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0 0 0"}}>
            <Grid container spacing={1} direction={"row"} style={{ padding: "0.2rem 0" }}>
                <Grid item xs={12} sm={10} md={10}>
                    <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: props.fontSize }}>
                        {props.text.toLocaleUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <CodeNektEye fontSize={props.fontSize} />
                </Grid>

            </Grid>
        </Grid>
    );
};

const PhotosTile = (props) => {
    return (
    <VoirTileLayout small
        icon={<CodeNektAdd/>}
        title={"PHOTOS"}
        children={
        props.photos.map((photo, index) => (
            <>
                <PhotosTileField fontSize={props.fontSize} text={photo.name} key={index}/>
                {index < (props.photos.length - 1) && <Divider style={{ backgroundColor: ORANGE, }} />}
            </>
        ))}
    />
    )
};

export { SinistreTile, PhotosTile };