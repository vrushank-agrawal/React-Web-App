import React from 'react';
import { Paper, Typography, Grid, Divider, Chip } from '@mui/material';

// Local imports
import { FONTSEMIBIG } from '../../utils/fontSize';
import { BLACKCN, BLUECN, ORANGEDARK, ORANGELIGHT, WHITECN, GREENCN } from '../../utils/colors';
import CodenektButton from '../../Components/CodeNektButton';
import { CodeNektEye } from '../../Components/CodeNektIcons';
import { LinkVehicule } from '../../Components/CodeNektPageLinks';

const VehicleTableValueSize = "1.2rem";
const VehicleTableFontsize = "14px";

const VehicleChip = (props) => {
    return (
        <Chip
            label={props.label}
            variant={(props.defvar) ? props.variant : "filled"}
            sx={{fontWeight: "bold",
                padding: "0.2rem",
                fontSize: props.fontSize,
                backgroundColor: props.backgroundColor,
                color: props.color,
                width: "fit-content",
            }}
        />
    )
}

const VehicleTypography = (props) => {
    return (
        <Typography variant="h6"
            style={{
                marginLeft: "1rem",
                fontSize: VehicleTableFontsize,
                fontWeight: "bold",
                padding: "0.2rem",
            }}
        >
            {props.title}
        </Typography>
    )
}

const VehiclesButton = () => {
    return (
        <CodenektButton
        blue={true}
        bold={true}
        color={WHITECN}
        height={"fit-content"}
            margin={"auto"}
            padding={"0.1rem 1rem"}
            startIcon={<CodeNektEye size={12}/>}
            title={"VOIR TOUS LES VÉHICULES"}
            to={LinkVehicule}
            width={"fit-content"}
        />
    )
}

const VehiclesTable = () => {
    return (
        <Paper elevation={3}
            style={{ width: "100%", height: "100%", paddingBottom: "1rem",
            display: "flex", justifyContent: "center", flexDirection: "column"
        }}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding: "1rem", alignContent: "left", }}> Véhicules </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
            <Chip
                label="33"
                variant="outlined"
                sx={{
                    margin: "auto",
                    marginTop: "1rem",
                    fontWeight: "bold",
                    padding: "0.2rem",
                    fontSize: FONTSEMIBIG,
                    color: BLACKCN,
                    width: "fit-content",
                    borderColor: ORANGELIGHT,
                }}
            />
            <Grid container spacing={2} style={{ marginTop: "0.5rem", justify: "center", marginBottom: "1rem" }}>
                <Grid item xs={12} sm={6} md={8}>
                    <VehicleTypography title="EN COMMANDE" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <VehicleChip
                        label="30"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={BLUECN}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <VehicleTypography title="AFFECTÉS" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <VehicleChip
                        label="2"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={GREENCN}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <VehicleTypography title="LIBRES" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <VehicleChip
                        label="1"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={ORANGEDARK}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <VehicleTypography title="EN ATTENTE DE VALIDATION" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <VehicleChip
                        label="1"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={ORANGEDARK}
                        color={WHITECN}
                    />
                </Grid>
            </Grid>
            <VehiclesButton />
        </Paper>
    )
}

export default VehiclesTable;