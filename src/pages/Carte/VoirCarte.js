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
const IconSize = 9;

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
    <Paper elevation={3} style={{width: "inherit", margin: "0.5rem"}}>
        <Grid container spacing={1} direction={"column"} style={{marginBottom: "1rem"}}>

            {/* --------------------------- Tile Header -------------------------- */}

            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex", alignContent: "center"}}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Typography variant="h6" style={{fontWeight: "bold", marginLeft: "1rem" }}>
                            INFORMATIONS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} style={{marginLeft: "auto"}}>
                        <IconWithBackground icon={<CodeNektEdit size={IconSize} />} />
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: ORANGELIGHT, width: "100%"}} />

            {/* --------------------------- Tile Content -------------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "0.5rem"}}>
                <Grid container spacing={1} direction={"row"} style={{display: "flex"}}>

                    <Grid item xs={12} sm={4} md={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CodeNektProfile size={120} />
                    </Grid>

                    <Grid item xs={12} sm={8} md={8} style={{paddingLeft: "2rem"}}>
                        <Typography variant="h6" style={{fontSize: FontSize}}> N°{props.carte.numero} </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize}}> {props.carte.type} </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize}}> {props.carte.marque} </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize}}> {props.carte.usage} </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize}}> {props.carte.dateContrat} </Typography>
                        <Typography variant="h6" style={{fontSize: FontSize}}> {props.carte.facturation} </Typography>
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
        <Grid container spacing={1} direction={"row"} style={{ display: "flex", margin: "1rem 0.1rem"}}>
            <Grid item xs={12} sm={2} md={2}>
                <Typography style={{fontWeight: FONTBOLD, fontSize: MEGABIG, justifyContent: 'flex-start'}}>
                    {props.title.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{display: "flex", justifyContent: "right"}}>
                <CodeNektButton transparent
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
            <Grid item xs={0} sm={6} md={6} />
        </Grid>
    );
}

const CarteRow = (props) => {
    const isVisible = props.total >= props.current;
    return (
    <Grid item xs={12} sm={12} md={12}>
        <Grid container spacing={1} >
        {isVisible ? (
          <Grid item xs={12} sm={6} md={6}>
            <LocalContent carte={props.data} />
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} md={6}>
                <Paper elevation={0} style={{ height: '14rem', background: 'transparent'}}> </Paper>
          </Grid>
        )}
            <Grid item xs={12} sm={6} md={6}>
                {/* Facturation */}
            </Grid>
        </Grid>
    </Grid>
    );
}

// ----------------------------------------------------------

const VoirCarte = (props) => {
    const cartes = 1;

    return (
        <div style={{
            alignItems: "center",
            flexDirection: 'column',
            textAlign: 'left',
            width: "70rem",
        }}>
        <Grid container spacing={1} >
            <CarteHeader title={"Carte"} />
            <Grid container spacing={1} direction={"column"} style={{display: "block"}}>
                <Grid item xs={12} sm={4} md={4}>
                    <CarteRow data={CarteData} total={cartes} current={1}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <CarteRow data={CarteData} total={cartes} current={2}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <CarteRow data={CarteData} total={cartes} current={3}/>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

export default VoirCarte;