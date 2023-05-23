import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { BsChevronLeft } from "react-icons/bs";

// CodeNekt imports
import { ORANGELIGHT, WHITECN } from "../../utils/colors";
import { LITTLE2 } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";

import CodeNektButton from "../../Components/CodeNektButton";
import { CodeNektEdit, CodeNektProfile } from "../../Components/CodeNektIcons";
import { MEGABIG } from "../../utils/fontSize";
import { LinkCartes } from "../../Components/CodeNektPageLinks";
import IconWithBackground from "../utils/IconWithBackground";

const FontSize = LITTLE2;
const IconSize = 12;

const CarteData = {
    id: "0987",
    type: "Carte",
    typeOptions: [{ label: "Carte", value: 1 }, { label: "Badge", value: 2 }],
    marque: "Toyota",
    marqueOptions: [{ label: "Toyota", value: 1 }, { label: "Honda", value: 2 }],
    usage: "Usage",
    usageOptions: [{ label: "Usage", value: 1 }, { label: "Usage2", value: 2 }],
    dateContrat: "01/01/2021",
    facturation: "Facturation",
    facturationOptions: [{ label: "Mensuel", value: 1 }, { label: "Annuel", value: 2 }],
    numero: "123456789",
};

// ------------------------------------------------------
// Local Content
// ------------------------------------------------------

const LocalContent = (props) => {
    return (
    <Paper elevation={3} padding="1rem" style={{width: "inherit", marginTop: "1rem"}}>
        <Grid container spacing={1} direction={"column"} style={{padding: "1rem"}}>

            {/* --------------------------- Tile Header -------------------------- */}

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", margin: "0" }}>
                            INFORMATIONS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} style={{marginLeft: "auto"}}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%", marginBottom: "1rem"}} />

            {/* --------------------------- Tile Content -------------------------- */}

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex"}}>

                    <Grid item xs={12} sm={4} md={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CodeNektProfile size={150} />
                    </Grid>

                    <Grid item xs={12} sm={8} md={8} style={{paddingLeft: "2rem"}}>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            N°{props.carte.numero}
                        </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            {props.carte.type}
                        </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            {props.carte.marque}
                        </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            {props.carte.usage}
                        </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            {props.carte.dateContrat}
                        </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize, margin: "0" }}>
                            {props.carte.facturation}
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    </Paper>
    );
}

// ------------------------------------------------------------
// Header
// ------------------------------------------------------------

const CarteHeader = (props) => {

    return (
        <Grid container spacing={1} direction={"row"} style={{ marginTop: "2rem", alignItems: "center" }}>
            <Grid item xs={12} sm={4} md={4}>
                <Typography style={{fontWeight: FONTBOLD, fontSize: MEGABIG, marginRight: "auto" }}>
                    {props.title.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8} style={{display: "flex", justifyContent: "right", marginLeft: "auto"}}>
                <CodeNektButton
                    bgcolor={"none"}
                    border={"1px solid"}
                    borderColor={WHITECN}
                    color={WHITECN}
                    marginLeft={"auto"}
                    padding={"0.8rem"}
                    startIcon={<BsChevronLeft size={15} />}
                    title={"Retour a la liste des cartes et badges"}
                    to={LinkCartes}
                    width={"100%"}
                />
            </Grid>
        </Grid>
    );
}

// ----------------------------------------------------------

const VoirCarte = (props) => {
    return (
        <div style={{
            alignItems: "center",
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            width: "30rem",
        }}>
            <CarteHeader title={CarteData.type} />
            <LocalContent carte={CarteData} />
        </div>
    );
}

export default VoirCarte;
