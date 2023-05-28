import React from "react";
import { Box, Chip, Divider, Grid, Paper, Typography } from "@mui/material";
import { BsChevronLeft } from "react-icons/bs";

// CodeNekt imports
import { BLACKCN, ORANGE, ORANGELIGHT, WHITECN } from "../../utils/colors";
import { BIG, LITTLE, LITTLE2, MINIBIG } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import CodeNektButton from "../../Components/CodeNektButton";
import { CodeNektAdd, CodeNektDelete, CodeNektEdit, CodeNektEye, CodeNektPersonFill, CodeNektProfile } from "../../Components/CodeNektIcons";
import { SinistreTile, PhotosTile } from "./UpperGrid";
import { MEGABIG } from "../../utils/fontSize";
import { LinkSinistre } from "../../Components/CodeNektPageLinks";
import { CollaborateurTile, DocumentsTile, InformationTile } from "./LowerGrid";

const FontSize = LITTLE2;

const CollaboratorData = {
    categorie: "Collaborateur",
    prenom: "John",
    nom: "Doe",
    email: "test@test.com",
    siteHanes: "Hanes",
    permisNumero: "123456",
    tempsAffectation: "12 mois",
}

const sinistreData = {
    vehicule: "XX-XXX-XX",
    date: "01/01/2021",
    commentaire: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam tincidunt. Sed vitae eros quis nisl aliquam tincidunt.",
    statut: "En cours",
}

const photosData = [
    { id: "1", name: "Photo 1", },
    { id: "2", name: "Photo 2", },
]

const informationData = {
    dateIntervention: "01/01/2021",
    dateSinistre: "01/01/2021",
    intervantion: "Lorem ipsum dolor sit amet",
}

const documentsData = [
    { id: "1", text: "constat", value: "123456", },
    { id: "2", text: "assurance", value: "123456", },
    { id: "3", text: "permis", value: "123456", },
]

// ------------------------------------------------------
// Local Content
// ------------------------------------------------------

const LocalContent = (props) => {
    return (
        <Grid container spacing={2} direction={"column"} style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>

            {/* ------------------------ Upper Grid -------------------------- */}

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2} direction={"row"}>
                    <Grid item xs={12} sm={9} md={9}>
                        <SinistreTile sinistre={sinistreData} fontSize={FontSize} />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <PhotosTile photos={photosData} fontSize={FontSize} />
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------------ Lower Grid -------------------------- */}

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2} direction={"row"}>
                    <Grid item xs={12} sm={3} md={3}>
                        <DocumentsTile documents={documentsData} fontSize={FontSize} />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <CollaborateurTile collaborateur={CollaboratorData} fontSize={FontSize} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Grid container spacing={2} direction={"column"} style={{display: "flex", flexDirection: "column"}}>
                            <Grid item xs={12} sm={12} md={12}>
                                 <InformationTile information={informationData} fontSize={FontSize} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "right"}}>
                                <CodeNektButton blue bold
                                    color={WHITECN}
                                    fontSize={FontSize}
                                    padding={"0.8rem"}
                                    title={"cloturer le sinistre"}
                                    width={"30%"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

// ------------------------------------------------------------
// Header
// ------------------------------------------------------------

const SinistreHeader = (props) => {
    return (
        <Grid container spacing={1} direction={"row"} style={{ marginTop: "2rem", alignItems: "center" }}>
            <Grid item xs={12} sm={6} md={6}>
                <Typography style={{fontWeight: FONTBOLD, fontSize: MEGABIG, marginRight: "auto" }}>
                    SINISTRE
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", justifyContent: "right", marginLeft: "auto"}}>
                <CodeNektButton
                    bgcolor={"none"}
                    border={"1px solid"}
                    borderColor={WHITECN}
                    color={WHITECN}
                    marginLeft={"auto"}
                    padding={"0.8rem"}
                    startIcon={<BsChevronLeft size={15} />}
                    title={"Retour a la liste des sinistres"}
                    to={LinkSinistre}
                    width={"fit-content"}
                />
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------

const VoirSinistre = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: "center", width: "70rem" }}>
            <SinistreHeader />
            <LocalContent />
        </div>
    );
}

export default VoirSinistre;
