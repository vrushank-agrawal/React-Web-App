import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";

// local imports
import { BLACKCN, ORANGE } from "../../../utils/colors";
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import { EnregistrerContinuerButton, PrecedentButton } from "../utils/Buttons";

const Vehicule5FontSize = LITTLE;

const Vehicule5Tile = (props) => {
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
        <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: Vehicule5FontSize }}>
            {props.text}
        </Typography>
    );
};

// ----------------------------------------------------------
// VehiclesTile
// ----------------------------------------------------------

const VehiclesTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    VEHICULE
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayTileField text={"ID: \t" + props.vehicule.id} />
                <DisplayTileField text={props.vehicule.marque} />
                <DisplayTileField text={props.vehicule.modele} />
                <DisplayTileField text={props.vehicule.version} />
                <DisplayTileField text={props.vehicule.boiteManuelle} />
                <DisplayTileField text={props.vehicule.puissanceFiscale} />
                <DisplayTileField text={props.vehicule.carburant} />
                <DisplayTileField text={props.vehicule.dateMiseEnCirculation} />
                <DisplayTileField text={props.vehicule.statut} />
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// Contrat Tile
// ----------------------------------------------------------

const ContratTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    CONTRAT
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayTileField text={props.contrat.numero} />
                <DisplayTileField text={props.contrat.duree} />
                <DisplayTileField text={props.contrat.dateEntree} />
                <DisplayTileField text={props.contrat.dateSortie} />
                <DisplayTileField text={props.contrat.kmContrat} />
                <DisplayTileField text={props.contrat.pneus} />
                <DisplayTileField text={props.contrat.loyerHT} />
                <DisplayTileField text={props.contrat.loyerFreq} />
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
                <DocumentsTileField fontSize={props.fontSize} text={"CONTRAT"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField fontSize={props.fontSize} text={"CARTE GRISE"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField fontSize={props.fontSize} text={"ASSURANCE"} value={"random value"}/>
            </Grid>
        </Grid>
    );
};
// ----------------------------------------------------------
// CollaborateurTile
// ----------------------------------------------------------

const CollaborateurTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    COLLABORATEUR
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayTileField text={props.colab.nom} />
                <DisplayTileField text={props.colab.prenom} />
                <DisplayTileField text={props.colab.siteHanes} />
                <DisplayTileField text={props.colab.dateFinAffectation} />
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// LocalContent
// ----------------------------------------------------------

const Vehicule5 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"} style={{display:"flex"}}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Vehicule5Tile
                        children={ <VehiclesTile vehicule={props.data.vehicule} /> }
                    />
                    <Vehicule5Tile
                        children={ <ContratTile contrat={props.data.contrat} /> }
                    />
                    <Vehicule5Tile
                        children={ <DocumentsTile docs={props.data.docs} fontSize={Vehicule5FontSize} /> }
                    />
                    <Vehicule5Tile
                        children={ <CollaborateurTile colab={props.data.collaborateur} /> }
                    />
                </Grid>
            </Grid>

            {/* ------------------------- BUTTONS ---------------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                <Grid container spacing={1.5} direction={"row"} style={{display: "flex", justifyContent: "left"}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <PrecedentButton onClick={props.onPrevious}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} style={{display: "flex", justifyContent: "right"}}>
                        <EnregistrerContinuerButton
                            onClick={props.onComplete}
                            valider={true}
                            width={"30%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Vehicule5;