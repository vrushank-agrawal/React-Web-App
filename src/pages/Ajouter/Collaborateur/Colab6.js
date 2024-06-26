import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

// local imports
import { BLACKCN } from "../../../utils/colors";
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import { EnregistrerContinuerButton, PrecedentButton } from "../utils/Buttons";

// DocumentsTile
import DocumentsTile from "../../utils/CollaborateurDocumentsTile";

const Colab6FontSize = LITTLE;

const Colab6Tile = (props) => {
    return (
        <Paper elevation={3} style={{ height: "90%", padding: "1rem 2rem" }}>
            {props.children}
        </Paper>
    );
}

// ----------------------------------------------------------
// CollaborateurTile
// ----------------------------------------------------------

const CollaborateurTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"}>
            <Grid item xs={12} sm={5} md={5}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: Colab6FontSize }}>
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7} style={{paddingLeft: "0.5rem"}}>
                <Typography color={BLACKCN} style={{ textAlign: "left" , fontSize: Colab6FontSize}} >
                    {props.value}
                </Typography>
            </Grid>
        </Grid>
    );
};

const CollaborateurTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    COLLABORATEUR
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <CollaborateurTileField text={"ID Codenekt"} value={props.id} />
                <CollaborateurTileField text={"Nom"} value={props.nom} />
                <CollaborateurTileField text={"Prénom"} value={props.prenom} />
                <CollaborateurTileField text={"Email"} value={props.email} />
                <CollaborateurTileField category text={"Catégorie"} value={props.categorie} />
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// VehiclesTile
// ----------------------------------------------------------

const VehiclesTileField = (props) => {
    return (
        <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: Colab6FontSize }}>
            {props.text}
        </Typography>
    );
};

const VehiclesTile = (props) => {
    return (
        <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                    VEHICULE
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <VehiclesTileField text={props.xx} />
                <VehiclesTileField text={props.marque} />
                <VehiclesTileField text={props.modele} />
                <VehiclesTileField text={props.dateFin} />
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// LocalContent
// ----------------------------------------------------------

const Colab6 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "auto", width: "50rem"}}>
            <Grid item xs={12} sm={5} md={5}>
                <Colab6Tile
                    children={
                        <CollaborateurTile
                            id={"123456789"}
                            nom={"Doe"}
                            prenom={"John"}
                            email={"John@Doe.com"}
                            categorie={"C"}
                        />
                    }
                />
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                    <PrecedentButton
                        onClick={props.onPrevious}
                        width={"30%"}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
                <Colab6Tile
                    children={<DocumentsTile fontSize={Colab6FontSize}/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Colab6Tile
                    children={
                        <VehiclesTile
                            xx={"XX 123 XX"}
                            marque={"Renault"}
                            modele={"Clio"}
                            dateFin={"01/01/2021"}
                        />
                    }
                />
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                    <EnregistrerContinuerButton
                        onClick={props.onComplete}
                        valider={true}
                        width={"70%"}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Colab6;