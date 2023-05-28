import React from "react";
import { Box, Chip, Divider, Grid, Paper, Typography } from "@mui/material";

import { BLACKCN, GREYBACK, GREYCN, ORANGE, ORANGELIGHT } from "../../utils/colors";
import { LinkVoirVehicule } from "../../Components/CodeNektPageLinks";
import { BIG, LITTLE2 } from "../../utils/fontSize";
import CodenektButton from "../../Components/CodeNektButton";
import IconWithBackground from "../utils/IconWithBackground";
import { CodeNektEdit, CodeNektAdd, CodeNektEye } from "../../Components/CodeNektIcons";

const IconSize = 12;

// ----------------------------------------------------------
// Sinistre Tile
// ----------------------------------------------------------

const SinistreTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"row"} style={{padding: "1rem"}}>

            <Grid item xs={12} sm={4} md={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
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
                    <CodenektButton blue
                        fontSize={props.fontSize}
                        title={"Voir le véhicule"}
                        to={LinkVoirVehicule}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h6" style={{fontWeight: "bold", margin: "0" }}>
                            SINISTRE
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} style={{display: "flex", alignSelf: "center"}}>
                        <Chip label={props.sinistre.statut} style={{backgroundColor: ORANGE, color: BLACKCN, height: "fit-content"}} />
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} style={{marginLeft: "auto"}}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize} />} />
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", marginBottom: "1rem"}} />

                <Typography variant="h6" style={{fontSize: props.fontSize, margin: "0", fontWeight: "bold" }}>
                    INFORMATION SINISTRE
                </Typography>
                <Typography variant="h6" style={{fontSize: props.fontSize, margin: "0" }}>
                    Date du sinistre: {props.sinistre.date}
                </Typography>
                <Typography variant="h6" style={{fontSize: props.fontSize, margin: "0" }}>
                    {props.sinistre.commentaire}
                </Typography>
            </Grid>

        </Grid>
    </Paper>
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
    <Paper elevation={3} padding="1rem" >
        <Grid container spacing={1} direction={"column"} style={{ padding: "0.5rem 1.5rem 1rem 1.5rem", }}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN }}>
                            PHOTOS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider style={{ backgroundColor: ORANGE, }} />

            <Grid item xs={12} sm={12} md={12}>
            {props.photos.map((photo, index) => (
            <>
                <PhotosTileField fontSize={props.fontSize} text={photo.name} key={index}/>
                {index < (props.photos.length - 1) && <Divider style={{ backgroundColor: ORANGE, }} />}
            </>
            ))}
            </Grid>

        </Grid>
    </Paper>
    )
};

export { SinistreTile, PhotosTile };