import React from "react";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";

import TCOHeader from "../TCO/TCOHeader";
import { DocumentsTile, VoirButton, VoirButtonTransparent, VoirTileLayout, VoirTileProfile } from "../utils/VoirPageUtils";
import { CodeNektBellFill, CodeNektEdit, CodeNektEte, CodeNektHiver } from "../../Components/CodeNektIcons";
import { BLACKCN, WHITECN, ORANGELIGHT, GREYBACK, ORANGE, GREENCN } from "../../utils/colors";
import { LITTLE, MICRO } from "../../utils/fontSize";

// ----------------------------------------------------------
// Km, Pmeus Tile
// ----------------------------------------------------------

const KilometreTile = (props) => {
    return (
        <VoirTileLayout small
            icon={<CodeNektEdit/>}
            title={"Kilométrage"}
            children={
            <>
                <span style={{marginLeft: "0.7rem"}}>Contrat: {props.km.contrat} kms <br /></span>
                <Box style={{
                    backgroundColor: WHITECN,
                    border: "1px solid " + BLACKCN,
                    borderRadius: "20rem",
                    color: BLACKCN,
                    height: "1.5rem",
                    marginLeft: "0.3rem",
                }}>
                    <Chip label={"Relevé du " + props.km.date +':'+ props.km.contrat + "km"}
                        style={{backgroundColor: WHITECN, height: "1.5rem"}}
                    />
                </Box>
                <VoirButton
                    startIcon={<CodeNektBellFill size={12} />}
                    title={"Relancer le collaborateur"}
                    to={""} /* #TODO add pus notif link here */
                    width={"100%"}
                />
                <VoirButtonTransparent
                    title={"Voir les outres relevés"}
                    to={""} /* #TODO add link here */
                />
            </>
            }
        />
    );
}

const PneumatiquesTileField = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{textAlign: "left", fontSize: LITTLE}}>
            <Grid item xs={2} sm={1.5} md={1.5}>
                {props.icon}
            </Grid>
            <Grid item xs={4} sm={4.5} md={4.5}>
                PNEUS {props.pneus.type}
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
                Consommés: {props.pneus.consommes} <br />
                <u>Restants: {props.pneus.restants}</u>
            </Grid>
        </Grid>
    );
}

const PneumatiquesTile = (props) => {
    return (
        <VoirTileLayout small
            icon={<CodeNektEdit/>}
            title={"Pneumatiques"}
            children={
            <>
                <PneumatiquesTileField icon={<CodeNektEte size={14} />} pneus={props.pneus.ete} />
                <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", margin: "0.5rem 0"}} />
                <PneumatiquesTileField icon={<CodeNektHiver size={12} />} pneus={props.pneus.hiver} />
            </>
            }
        />
    );
}

// ----------------------------------------------------------
// Vehicule Tile
// ----------------------------------------------------------

const VehiculeTile = (props) => {
    return (
        <VoirTileProfile vehicule
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
                        {props.vehicule.number}
                    </Typography>
                </Box>
            }
            heading={
                <Typography variant="h6" style={{fontWeight: "bold" }}>
                    VÉHICULE
                </Typography>
            }
            content={
            <span fontSize={MICRO} style={{fontFamily: "Poppins-Regular"}}>
                {props.vehicule.marque} <br />
                {props.vehicule.modele} &nbsp;&nbsp; | &nbsp;&nbsp; {props.vehicule.version} <br />
                {props.vehicule.boite} <br />
                {props.vehicule.puissance} <br />
                {props.vehicule.carburant} <br />
                {props.vehicule.date} <br />
                <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", margin: "0.5rem 0"}} />
                <Typography variant="body1" color={ORANGE}>
                    CONTRAT
                </Typography>
                {props.vehicule.contrat.duree} <br />
                {props.vehicule.contrat.dateEntre} &nbsp;&nbsp; | &nbsp;&nbsp; {props.vehicule.contrat.dateSortie} <br />
                {props.vehicule.contrat.loyer} HT <br />
                <Typography variant="body1" color={GREENCN}>
                    {props.vehicule.contrat.statut}
                </Typography>
            </span>
            }
        />
    );
}

// ----------------------------------------------------------
// Main Grid
// ----------------------------------------------------------

const LeftGrid = (props) => {
    return (
    <Grid container spacing={2} direction={"column"} style={{display: "block"}}>

        <Grid item xs={12} sm={12} md={12}>
            <VehiculeTile vehicule={props.vehicule} />
        </Grid>

        <Grid  item xs={12} sm={12} md={12}>
            <TCOHeader
                firstCol={2}
                moyen={"212,75€"}
                secondCol={4}
                total={"12 122,90€"}
            />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={1} direction={"row"}>

                <Grid item xs={12} sm={6} md={6}>
                    <DocumentsTile fontSize={props.fontSize} documents={props.documents} />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={2} direction={"column"}>

                        <Grid item xs={12} sm={12} md={12}>
                            <KilometreTile km={props.km} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <PneumatiquesTile pneus={props.pneus} />
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    </Grid>
    );
}

export default LeftGrid;