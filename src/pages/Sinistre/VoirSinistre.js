import React from "react";
import { Grid, Typography } from "@mui/material";

// CodeNekt imports
import { LITTLE2 } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import { SinistreTile, PhotosTile } from "./UpperGrid";
import { MEGABIG } from "../../utils/fontSize";
import { LinkSinistre } from "../../Components/CodeNektPageLinks";
import { CollaborateurTile, DocumentsTile, InformationTile } from "./LowerGrid";
import { RetourButton, VoirButton } from "../utils/VoirPageUtils";

import { CollaboratorData, PhotosData, InformationData } from "../utils/VoirTestData";

const FontSize = LITTLE2;

const sinistreData = {
    vehicule: "XX-XXX-XX",
    date: "01/01/2021",
    commentaire: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam tincidunt. Sed vitae eros quis nisl aliquam tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam tincidunt. Sed vitae eros quis nisl aliquam tincidunt.",
    statut: "En cours",
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
                        <PhotosTile photos={PhotosData} fontSize={FontSize} />
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
                                 <InformationTile information={InformationData} fontSize={FontSize} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "right"}}>
                                <VoirButton
                                    fontSize={FontSize}
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
                <RetourButton
                    title={"Retour a la liste des sinistres"}
                    to={LinkSinistre}
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
