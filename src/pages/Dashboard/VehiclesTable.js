import React from 'react';
import { Paper, Typography, Grid, Divider, Chip } from '@mui/material';

// Local imports
import { BIG, FONTSEMIBIG } from '../../utils/fontSize';
import { BLACKCN, BLUECN, ORANGEDARK, ORANGELIGHT, WHITECN, GREENCN } from '../../utils/colors';
import CodenektButton from '../../Components/CodeNektButton';
import { CodeNektEye } from '../../Components/CodeNektIcons';
import { LinkVehicule } from '../../Components/CodeNektPageLinks';
import { TablePaperStyle } from './Styles';

const VehicleTableValueSize = "1.2rem";
const VehicleTableFontsize = "14px";

const VehicleChip = (props) => {
    return (
        <Chip
            label={props.label}
            variant={props.variant ? props.variant : "filled"}
            sx={{
                backgroundColor: props.backgroundColor,
                color: props.color,
                fontFamily: "Poppins-Black",
                fontSize: props.fontSize,
                width: "fit-content",
            }}
        />
    )
}

const VehicleTypography = (props) => {
    return (
        <Typography variant="h6"
            style={{
                margin: "0 2rem",
                fontSize: VehicleTableFontsize,
                fontWeight: "bold",
            }}
        >
            {props.title}
        </Typography>
    )
}

const VehiclesButton = () => {
    return (
        <CodenektButton blue bold
        color={WHITECN}
        height={"fit-content"}
            margin={"auto"}
            padding={"0.1rem 1rem"}
            startIcon={<CodeNektEye size={12}/>}
            title={"VOIR TOUS LES VÉHICULES"}
            to={LinkVehicule}
        />
    )
}

const VehiclesTable = () => {
    return (
        <Paper elevation={3} style={TablePaperStyle}>
            <Typography variant="h6" style={{ fontWeight: "bold", margin: "0.5rem 2rem", alignContent: "left", }}> Véhicules </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
            <Chip
                label="33"
                variant="outlined"
                sx={{
                    borderColor: ORANGELIGHT,
                    fontFamily: "Poppins-Black",
                    fontSize: BIG,
                    fontWeight: "bold",
                    margin: "0.5rem auto",
                    padding: "0.2rem",
                }}
            />
            <Grid container spacing={1} style={{ justify: "center", margin: "0.5rem 0" }}>
                <Grid item xs={12} sm={6} md={9}>
                    <VehicleTypography title="EN COMMANDE" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <VehicleChip
                        label="30"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={BLUECN}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <VehicleTypography title="AFFECTÉS" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <VehicleChip
                        label="2"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={GREENCN}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <VehicleTypography title="LIBRES" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <VehicleChip
                        label="1"
                        fontSize={VehicleTableValueSize}
                        backgroundColor={ORANGEDARK}
                        color={WHITECN}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <VehicleTypography title="EN ATTENTE DE VALIDATION" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
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