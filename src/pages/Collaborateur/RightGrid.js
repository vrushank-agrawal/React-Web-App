import React from "react";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";

// CodeNekt imports
import { BLACKCN, GREYTEXT, WHITECN } from "../../utils/colors";
import { LITTLE2, MINIBIG } from "../../utils/fontSize";
import { CodeNektDelete, CodeNektEye, CodeNektEdit } from "../../Components/CodeNektIcons";
import { VoirButton } from "../utils/VoirPageUtils";

const FontSize = LITTLE2;
const ButtonWidth = "85%";

// ----------------------------------------------------
// Vehicule
// ----------------------------------------------------

const VehiculeTile = (props) => {
    return (
    <Paper elevation={3} padding="1rem 0" style={{
        backgroundColor: BLACKCN,
        elevation: 3,
        justifyContent: "center",
    }}>
        <Grid container spacing={1} direction={"column"} style={{direction: "flex", padding: "1rem" }}>
            <Grid item xs={12} sm={12} md={12} style={{marginLeft: "0.5rem"}}>
                <Typography variant="h6" style={{ fontSize: MINIBIG, fontWeight: "bold", color: WHITECN }}>
                    VÉHICULE AFFECTÉ
                </Typography>
            </Grid>
            <Divider sx={{ backgroundColor: WHITECN, width: "100%"}} />
            <Box>
                <Box
                    alignItems="center"
                    bgcolor={WHITECN}
                    color={BLACKCN}
                    display="flex"
                    fontSize={FontSize*1.4}
                    justifyContent="center"
                    marginLeft={"1rem"}
                    marginTop={"1rem"}
                    padding={"0.5rem 2rem"}
                    width="fit-content"
                >
                    {props.vehicule.number}
                </Box>
            </Box>
            <Grid item xs={12} sm={12} md={12} style={{margin: "2rem 0.5rem"}}>
                <Typography variant="h6" style={{color: WHITECN, fontSize: FontSize,}}>
                    {props.vehicule.Duree}
                </Typography>
                <Typography variant="h6" style={{color: WHITECN, fontSize: FontSize,}}>
                    {props.vehicule.DateAffection}
                </Typography>
                <Typography variant="h6" style={{color: WHITECN, fontSize: FontSize,}}>
                    {props.vehicule.DateFin}
                </Typography>
            </Grid>
            <VoirButton
                fontSize={FontSize}
                startIcon={<CodeNektEye size={15} />}
                title={"VOIR LE VEHICULE"}
                width={ButtonWidth}
            />
            <VoirButton
                fontSize={FontSize}
                startIcon={<CodeNektEdit size={12} color={WHITECN}/>}
                title={"CHANGER LE VEHICULE"}
                width={ButtonWidth}
            />
            <VoirButton
                fontSize={FontSize}
                startIcon={<CodeNektDelete size={15} />}
                title={"RETIRER LE VEHICULE"}
                width={ButtonWidth}
            />
        </Grid>
    </Paper>
    );
};

// ----------------------------------------------------
// History
// ----------------------------------------------------

const HistoryTileField = (props) => {
    return (
        <Typography variant="h6" style={{color: WHITECN, fontSize: FontSize,}}>
            {props.vehicule.date} | {props.vehicule.number}
        </Typography>
    );
};

const HistoryTile = (props) => {
    return (
        <Paper elevation={3} padding="2rem" style={{ backgroundColor: GREYTEXT }}>
            <Grid container spacing={1} direction={"column"} style={{
                alignItems: "center",
                direction: "flex",
                padding: "0.5rem",
                justifyContent: "center"
            }}>
                <Grid item xs={12} sm={12} md={12} style={{marginLeft: "0.5rem"}}>
                    <Typography variant="h6" style={{fontSize: MINIBIG-1, fontWeight: "bold", color: WHITECN }}>
                        HISTORIQUE AFFECTATION
                    </Typography>
                </Grid>
                <Divider sx={{ backgroundColor: WHITECN, width: "100%"}} />
                <Grid item xs={12} sm={12} md={12} style={{margin: "0.5rem"}}>
                    {props.history.map((history, index) => (
                        <HistoryTileField key={index} vehicule={history} />
                    ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

export { VehiculeTile, HistoryTile };