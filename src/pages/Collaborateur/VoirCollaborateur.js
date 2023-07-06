import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

// CodeNekt imports
import { BLACKCN, WHITECN } from "../../utils/colors";
import { LITTLE, LITTLE2 } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import { CodeNektDelete, CodeNektPersonFill } from "../../Components/CodeNektIcons";
import { CollaboratorTile, DocumentsTile, SinistreTile, VoirButton } from "../utils/VoirPageUtils";
import { HistoryTile, VehiculeTile } from "./RightGrid";
import { MEGABIG } from "../../utils/fontSize";
import { LinkCollaborateur } from "../../Components/CodeNektPageLinks";
import { RetourButton } from "../utils/VoirPageUtils";

import { CollaboratorData, SinistreData, VehiculeData, HistoryData } from "../utils/VoirTestData";

const FontSize = LITTLE2;

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
                        <VoirButton
                            fontSize={FontSize}
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
                <RetourButton
                    title={"Retour a la liste des collaborateurs"}
                    to={LinkCollaborateur}
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
