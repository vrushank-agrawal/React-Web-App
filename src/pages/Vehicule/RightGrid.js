import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";

// Local imports
import { SinistreTile, VoirButton, VoirButtonTransparent, ItemRowPadding, HeaderRowPadding, VoirTileLayout } from "../utils/VoirPageUtils";
import { CodeNektDelete, CodeNektAdd, CodeNektEye, CodeNektEdit, CodeNektBellFill } from "../../Components/CodeNektIcons";
import { LITTLE, LITTLE2 } from "../../utils/fontSize";
import { LinkVoirCollab } from "../../Components/CodeNektPageLinks";
import { BLACKCN, BLUECN, ORANGE, WHITECN } from "../../utils/colors";
import IconWithBackground from "../utils/IconWithBackground";
import CodenektButton from "../../Components/CodeNektButton";

const FontSize = LITTLE2;

// ----------------------------------------------------------
// Colab Tile
// ----------------------------------------------------------

const CollaborateurTile = (props) => {
    return (
    <VoirTileLayout
        title={"COLLABORATEUR"}
        children = {
            <Grid container spacing={1} direction={"row"} style={{textAlign: "left", alignItems: "center"}}>
                <Grid item xs={10} sm={11} md={11}>
                    {props.colab.id} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.colab.nom} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.colab.prenom}
                </Grid>
                <Grid item xs={2} sm={1} md={1}>
                    <Link to={LinkVoirCollab}> <IconButton> <CodeNektEye size={20} /> </IconButton> </Link>
                </Grid>
            </Grid>
        }
    />
    );
}

// ----------------------------------------------------------
// Historique Tile
// ----------------------------------------------------------

const HistoriqueTilePopup = (props) => {
    return (
        <Box bgcolor={BLUECN} borderRadius={"1rem"} style={{marginTop: "0.5rem"}}>
            <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}} >
                <Grid item xs={12} sm={6} md={6}>
                    <Typography style={{padding: "0.5rem", fontSize: FontSize, color: BLACKCN }}>
                        <CodeNektBellFill size={LITTLE}/>  &nbsp;&nbsp;
                        {props.historique.date} &nbsp;&nbsp; | &nbsp;&nbsp;
                        {props.historique.type}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{padding: "0.5rem 0"}}>
                    <CodenektButton red
                        color={WHITECN}
                        startIcon={<CodeNektBellFill/>}
                        title={"Relancer le collaborateur"}
                        to={""} /* #TODO add push notif link here */
                        width={"90%"}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

const HistoriqueTileField = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}}>
            <Grid item xs={12} sm={9} md={9}>
                <Typography style={{margin: "0.4rem 0", fontSize: FontSize, textAlign: "left", color: BLACKCN }}>
                    {props.historique.date} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.historique.type} &nbsp;&nbsp; | &nbsp;&nbsp;
                    {props.historique.nom} &nbsp;&nbsp;

                </Typography>
            {props.index !== props.historiqueLength - 1 &&
            <Divider sx={{ backgroundColor: ORANGE, width: "131%"}} />
            }
            </Grid>
            <Grid item xs={12} sm={3} md={3} style={{display: "flex", alignItems: "center"}}>
                | &nbsp; Facture &nbsp;
                <Link /* #TODO add link here*/> <IconButton> <CodeNektEye size={20} /> </IconButton> </Link>
            </Grid>
        </Grid>
    );
};

const HistoriqueTile = (props) => {
    return (
    <Paper elevation={3}>
        <Grid container spacing={1} direction={"row"} style={HeaderRowPadding}>

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{textAlign: "left"}}>
                    <Grid item xs={11} sm={11} md={11} style={{display: "flex", alignItems: "center", paddingLeft: "2rem"}}>
                        <Typography variant="h6" style={{fontWeight: "bold", textAlign: "left", color: BLACKCN}}>
                            HISTORIQUE DES INTERVENTIONS
                        </Typography>
                    </Grid>
                    <Grid item xs={11} sm={1} md={1}>
                        <IconWithBackground icon={<CodeNektAdd />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: ORANGE, width: "100%"}} />

            <Grid item xs={12} sm={12} md={12} style={ItemRowPadding}>
                <HistoriqueTilePopup historique={props.historique[0]} />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={ItemRowPadding}>
                {props.historique.map((historique, index) => (
                    <HistoriqueTileField
                        index={index}
                        historique={historique}
                        historiqueLength={props.historique.length}
                    />
                ))}
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{padding: "0 0.8rem"}}>
                <VoirButtonTransparent
                    title="Voir toutes les interventions"
                    /* #TODO add link here */
                />
            </Grid>

        </Grid>
    </Paper>
    );
}

// ----------------------------------------------------------
// Main Grid
// ----------------------------------------------------------

const RightGrid = (props) => {
    return (
    <Grid container spacing={2} direction={"column"}>

        <Grid item xs={12} sm={12} md={12}>
            <CollaborateurTile colab={props.colab} />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
            <HistoriqueTile historique={props.historique}/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
            <SinistreTile sinistres={props.sinistre} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "right", marginTop: "auto"}}>
            <VoirButton
                fontSize={FontSize}
                startIcon={<CodeNektDelete size={15} />}
                title={"DESACTIVER LE VÉHICULE"}
                width={"50%"}
            />
        </Grid>
    </Grid>
    );
}

export default RightGrid;