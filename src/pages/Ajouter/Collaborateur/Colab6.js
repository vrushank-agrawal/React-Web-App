import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";

// local imports
import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, ORANGE } from "../../../utils/colors";
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";

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
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Colab6FontSize }}>
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7} style={{paddingLeft: "0.5rem"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Colab6FontSize}} >
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
// DocumentsTile
// ----------------------------------------------------------

const DocumentsTileField = (props) => {
    return (
        <Grid item xs={12} sm={12} md={12} style={{margin: "0.3rem 0"}}>
            <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Colab6FontSize }}>
                {props.text.toLocaleUpperCase()}
            </Typography>
            <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Colab6FontSize/1.2}} >
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
                <DocumentsTileField text={"Carte d'identité"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField text={"Permis"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField text={"Carte Essence"} value={"random value"}/>
                <Divider style={{ backgroundColor: ORANGE, }} />
                <DocumentsTileField text={"Télepéage"} value={"random value"}/>
            </Grid>
        </Grid>
    );
};

// ----------------------------------------------------------
// VehiclesTile
// ----------------------------------------------------------

const VehiclesTileField = (props) => {
    return (
        <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Colab6FontSize }}>
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

const LocalContent = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"}>
            <Grid item xs={12} sm={4} md={4}>
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
                    <CodenektButton grey
                        color={BLACKCN}
                        onClick={props.onPrevious}
                        title={"PRÉCÉDENT"}
                        width={"50%"}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Colab6Tile
                    children={<DocumentsTile />}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Colab6Tile
                    children={<VehiclesTile
                        xx={"XX 123 XX"}
                        marque={"Renault"}
                        modele={"Clio"}
                        dateFin={"01/01/2021"}
                        />
                    }
                />
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                    <CodenektButton grey
                        color={BLACKCN}
                        onClick={()=>{console.log("enregistrer")}}
                        title={"ENREGISTRER"}
                        width={"35%"}
                    />
                    <CodenektButton orange
                        color={BLACKCN}
                        margin={"0 0 0 auto"}
                        onClick={props.onComplete}
                        title={"ENREGISTRER ET VALIDER"}
                        width={"60%"}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------
// Main Colab6 Component
// ----------------------------------------------------------

const Colab6 = (props) => {

    const onComplete = () => {
        props.onComplete(7);
    }

    const onPrevious = () => {
        props.onComplete(5);
    }

    return (
        <Grid container spacing={1.5} direction={"column"} style={{display:"flex"}}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={6}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "1rem"}}>
                <Typography
                    color={GREYTEXT2}
                    fontSize={MINIBIG}
                    style={{ textAlign: "center" }}
                >
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{alignSelf: "center", width: "80%"}}>
                <LocalContent
                    onComplete={onComplete}
                    onPrevious={onPrevious}
                />
            </Grid>
        </Grid>
    );
}

export default Colab6;