import React from "react";
import { Box, Chip, Divider, Grid, Paper, Typography } from "@mui/material";
import { BsChevronLeft } from "react-icons/bs";

// CodeNekt imports
import { BLACKCN, ORANGE, ORANGELIGHT, WHITECN } from "../../utils/colors";
import { BIG, LITTLE, LITTLE2, MINIBIG } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import CodeNektButton from "../../Components/CodeNektButton";
import { CodeNektAdd, CodeNektDelete, CodeNektEdit, CodeNektEye, CodeNektPersonFill, CodeNektProfile } from "../../Components/CodeNektIcons";
import { CollaboratorTile, DocumentsTile, SinistreTile } from "./LeftGrid";
import { HistoryTile, VehiculeTile } from "./RightGrid";
import { MEGABIG } from "../../utils/fontSize";
import { LinkCollaborateur } from "../../Components/CodeNektPageLinks";

const FontSize = LITTLE2;

const CollaboratorData = {
    id: "123456789",
    nom: "Doe",
    prenom: "John",
    email: "John@Doe.com",
    categorie: "Collaborateur",
    denomination: "Avantage",
    montant: "100",
    freq: "mensuel",
}

const SinistreData = [
    {
        Date: "01/01/2021",
        Nom: "Doe",
        Statut: "En cours",
    },
    {
        Date: "01/01/2021",
        Nom: "Doe",
        Statut: "En cours",
    },
]

const VehiculeData = {
    number: "XX-XXX-XX",
    Duree: "12 mois",
    DateAffection: "01/01/2021",
    DateFin: "01/01/2022",
}

const HistoryData = [
    {
        date: "01/01/2021",
        number: "XX-XXX-XX",
    },
    {
        date: "01/01/2021",
        number: "XX-XXX-XX",
    },
    {
        date: "01/01/2021",
        number: "XX-XXX-XX",
    },
]

// ------------------------------------------------------
// Local Content
// ------------------------------------------------------

const LocalContent = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{ width: "100%", marginTop: "1rem" }}>

            {/* ------------------------ Left Grid -------------------------- */}

            <Grid item xs={12} sm={9} md={9}>
                <Grid container spacing={2} direction={"column"}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CollaboratorTile collaborateur={CollaboratorData} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={1} direction={"row"}>
                            <Grid item xs={12} sm={3.5} md={3.5}>
                                <DocumentsTile fontSize={LITTLE} />
                            </Grid>
                            <Grid item xs={12} sm={8.5} md={8.5}>
                                <SinistreTile sinistres={SinistreData} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------------ Right Grid -------------------------- */}

            <Grid item xs={12} sm={3} md={3}>
                <Grid container spacing={2} direction={"column"}>
                    <Grid item xs={12} sm={12} md={12}>
                        <VehiculeTile vehicule={VehiculeData} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <HistoryTile
                            history={HistoryData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center"}}>
                        <CodeNektButton blue
                            color={WHITECN}
                            fontSize={FontSize}
                            padding={"0.8rem"}
                            startIcon={<CodeNektDelete size={15} />}
                            title={"DESACTIVER LE COLLABORATEUR"}
                            width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

// ------------------------------------------------------------
// Header
// ------------------------------------------------------------

const CollaborateurHeader = (props) => {

    return (
        <Grid container spacing={1} direction={"row"} style={{ marginTop: "2rem", alignItems: "center" }}>
            <Grid item xs={12} sm={3.5} md={3.5}>
                <Typography style={{fontWeight: FONTBOLD, fontSize: MEGABIG, marginRight: "auto" }}>
                    COLLABORATEUR
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
                <Chip
                    icon={<CodeNektPersonFill size={15} />}
                    label={"ID " + "props.collaborateur.id"}
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
            <Grid item xs={12} sm={3.5} md={3.5} style={{display: "flex", justifyContent: "right", marginLeft: "auto"}}>
                <CodeNektButton
                    bgcolor={"none"}
                    border={"1px solid"}
                    borderColor={WHITECN}
                    color={WHITECN}
                    marginLeft={"auto"}
                    padding={"0.8rem"}
                    startIcon={<BsChevronLeft size={15} />}
                    title={"Retour a la liste des collaborateurs"}
                    to={LinkCollaborateur}
                    width={"fit-content"}
                />
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------

const VoirCollaborateur = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: "center", width: "70rem" }}>
            <CollaborateurHeader />
            <LocalContent />
        </div>
    );
}

export default VoirCollaborateur;
