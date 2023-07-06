import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

// CodeNekt imports
import { BLACKCN, WHITECN } from "../../utils/colors";
import { MEGABIG } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import { CodeNektCar } from "../../Components/CodeNektIcons";
import LeftGrid from "./LeftGrid";
import { LinkVehicule } from "../../Components/CodeNektPageLinks";
import { RetourButton } from "../utils/VoirPageUtils";
import RightGrid from "./RightGrid";

const VehiculeData = {
    "number": "XX-XXX-XX",
    "marque": "Renault",
    "modele": "Clio",
    "version": "1.5 DCI 90CH ENERGY INTENS EDC",
    "boite": "Automatique",
    "puissance": "90",
    "carburant": "Diesel",
    "date": "01/01/2021",
    "contrat": {
        "duree": "12 mois",
        "dateEntre": "01/01/2021",
        "dateSortie": "01/01/2022",
        "loyer": "1000€",
        "statut": "En cours",
    }
}
const DocsData = [
    { text: "contrat", value: "123456"},
    { text: "carte", value: "123456"},
    { text: "badge", value: "123456"},
    { text: "carte grise", value: "123456"},
    { text: "assurance", value: "123456"},
];
const KmData = { "contrat": "100 000", "date": "01/01/2021"}
const PneusData = {
    "ete" : { "type": "ÉTÉ", "consommes": "2", "restants": "2" },
    "hiver" : { "type": "HIVER", "consommes": "2", "restants": "2" },
};
const CollaboratorData = {"id": 1, "nom": "Doe", "prenom": "John"};
import { SinistreData, HistoryData } from "../utils/VoirTestData";

// ------------------------------------------------------
// Local Content
// ------------------------------------------------------

const LocalContent = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{ width: "100%", marginTop: "0.2rem" }}>

            <Grid item xs={12} sm={6} md={6}>
                <LeftGrid
                    documents={DocsData}
                    km={KmData}
                    pneus={PneusData}
                    vehicule={VehiculeData}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <RightGrid
                    colab={CollaboratorData}
                    historique={HistoryData}
                    sinistre={SinistreData}
                />
            </Grid>

        </Grid>
    );
}

// ------------------------------------------------------------
// Header
// ------------------------------------------------------------

const VehiculeHeader = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{ alignItems: "center" }}>
            <Grid item xs={12} sm={2} md={2}>
                <Typography style={{fontWeight: FONTBOLD, fontSize: MEGABIG, marginRight: "auto" }}>
                    VÉHICULE
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Chip
                    icon={<CodeNektCar size={15} />}
                    label={"ID " + "props.vehicule.id"}
                    style={{
                        backgroundColor: BLACKCN,
                        color: WHITECN,
                        fontWeight: FONTBOLD,
                        margin: "0",
                        marginRight: "auto",
                        padding: "0.8rem"
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3} md={3} style={{display: "flex", justifyContent: "right", marginLeft: "auto"}}>
                <RetourButton
                    title={"Retour a la liste des véhicules"}
                    to={LinkVehicule}
                />
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------

const VoirVehicule = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: "center", width: "70rem" }}>
            <VehiculeHeader />
            <LocalContent />
        </div>
    );
}

export default VoirVehicule;
