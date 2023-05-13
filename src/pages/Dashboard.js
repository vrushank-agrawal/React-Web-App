import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { List, ListItem, Paper, Typography, Grid, Divider, Chip } from '@mui/material';

import CodeNektTable from '../Components/CodeNektTable';
import CodeNektTableSmall from '../Components/CodeNektTableSmall';
import CodenektButton from '../Components/CodeNektButton';
import { notifications as data } from './utils/test-data';
import { FONTSEMIBIG } from '../utils/fontSize';
import { FONTBOLD } from '../utils/fonts';
import { IconButton } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ImEye } from 'react-icons/im';
import { BsThreeDots } from 'react-icons/bs';
import { BLACKCN, BLUECN, ORANGEDARK, ORANGELIGHT, WHITECN, GREENCN } from '../utils/colors';

// --------------------------- NOTIFICATIONS ---------------------------

const NotificationTableFontsize = "12px";
const NotificationTableHeadersize = "10px";

const NotificationDropdownActions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const MenuOptions = ["Marquer comme lu", "Relancer le collaborateur", "Supprimer"]

    return (
        <>
            <IconButton onClick={handleClick}> <BsThreeDots size={15} /> </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {MenuOptions.map((option) => (
                    <MenuItem key={option} onClick={handleClose} sx={{ fontSize: NotificationTableFontsize, color: BLUECN }}> {option} </MenuItem>
                ))}
            </Menu>
        </>
    )
}

// change column fontsize in the cellStyle
const NotificationColumns = {
    names: [
        { title: "Date", field: "Date", width: 100, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Type d'Intervention", field: "Type", width: 190, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "XX-000-XX", field: "XX", width: 160, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Marque", field: "Marque", width: 90, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Collaborateur", field: "Collaborateur", width: 140, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "", field: "actions", width: 150, sorting: false, filtering: false, search: false,
            render: (rowData) => {
                return(
                <>
                    <IconButton> <ImEye size={15} /> </IconButton>
                    <NotificationDropdownActions />
                </>
                )
            }
        },
    ],
}

// --------------------------- VEHICLES ---------------------------

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
            title={"VOIR TOUS LES VÉHICULES"}
            width={"fit-content"}
            bold={true}
            blue={true}
            padding={"0.5rem"}
            margin={"auto"}
            height={"fit-content"}
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
                        fontSize={TCOTableValueSize}
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
                        fontSize={TCOTableValueSize}
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
                        fontSize={TCOTableValueSize}
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
                        fontSize={TCOTableValueSize}
                        backgroundColor={ORANGEDARK}
                        color={WHITECN}
                    />
                </Grid>
            </Grid>
            <VehiclesButton />
        </Paper>
    )
}

// --------------------------- TCO ---------------------------

const TCOTableValueSize = "1.2rem";
const TCOTableFontsize = "14px";

const TCOChip = (props) => {
    return (
        <Chip
            label={props.label}
            variant='outlined'
            sx={{fontWeight: "bold",
                padding: "0.2rem",
                margin: "auto",
                fontSize: props.fontSize,
                borderColor: ORANGELIGHT,
            }}
        />
    )
}

const TCOButton = () => {
    return (
        <CodenektButton
            title={"VOIR LE COÛT PAR VÉHICULE"}
            width={"fit-content"}
            bold={true}
            blue={true}
            padding={"0.5rem"}
            margin={"1rem auto auto auto"}
            height={"fit-content"}
        />
    )
}

const TCOTable = () => {
    return (
        <Paper elevation={3}
            style={{ width: "100%", height: "100%", paddingBottom: "1rem",
                display: "flex", justifyContent: "center", flexDirection: "column"
        }}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding: "1rem" }}> TCO par mois </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
            <Grid container spacing={2} style={{ marginTop: "0.5rem", justify: "center", marginBottom: "1rem" }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" style={{ marginLeft: "1rem", fontSize: TCOTableFontsize }}> COÛT TOTAL DU PARC </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TCOChip
                        label="30 212,90 €"
                        fontSize={TCOTableValueSize}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "0.5rem" }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" style={{ marginLeft: "1rem", fontSize: TCOTableFontsize }}> COÛT MOYEN PAR VÉHICULE </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TCOChip
                        label="212,90 €"
                        fontSize={TCOTableValueSize}
                    />
                </Grid>
            </Grid>
            <TCOButton />
        </Paper>
    )
}

// --------------------------- SINISTRES ---------------------------

const SinistreListItem = (props) => {
    return (
        <List disablePadding sx={{padding: "0"}}>
            <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> {props.XX} </ListItem>
            <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> {props.Date} </ListItem>
            <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> {props.statut} </ListItem>
            <ListItem sx={{padding: "0 0 0.2rem 1rem", color: ORANGEDARK, textDecoration: 'underline' }}> {props.link} </ListItem>
        </List>
    )
}

const SinistreButton = () => {
    return (
        <CodenektButton
            blue={true}
            bold={true}
            height={"fit-content"}
            margin={"auto"}
            padding={"0.5rem"}
            title={"VOIR TOUS LES SINISTRES"}
            width={"10rem"}
        />
    )
}

const SinistreTable = () => {
    return (
        <Paper elevation={3} style={{ width: "100%", height: "100%", paddingBottom: "1rem" }}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding: "1rem" }}> SINISTRES </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />
            <Grid container spacing={2} alignItems="stretch" style={{ marginTop: "0.5rem", justify: "center", marginBottom: "1rem" }}>
                <Grid item xs={12} sm={2} md={2}>
                    <SinistreListItem XX="XX" Date="Date" statut="Statut" link="CONSULTER" />
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <SinistreListItem XX="XX" Date="Date" statut="Statut" link="CONSULTER" />
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <SinistreListItem XX="XX" Date="Date" statut="Statut" link="CONSULTER" />
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <SinistreListItem XX="XX" Date="Date" statut="Statut" link="CONSULTER" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} sx={{alignSelf: "flex-end"}}>
                    <SinistreButton />
                </Grid>
            </Grid>
        </Paper>
    )
}

// --------------------------- DASHBOARD ---------------------------

function Dashboard (props) {

    const NotificationTable = () => {
        return (
            <CodeNektTable
                column={NotificationColumns}
                data={data}
                header={"NOTIFICATIONS"}
                rowsPerPage={5}
                toolbar={false}
            />
        )
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "90%" }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                TABLEAU DE BORD&emsp;
                <span style={{fontSize: "1.4rem", color: WHITECN}}>
                    Bienvenue
                </span>
            </h1>
            <Grid container spacing={1.5}>
                <Grid item xs={12} sm={5} md={4}>
                    <Grid container item xs={12} sm={12} md={12} spacing={1.5} direction="column">
                        <Grid item xs={12} sm={4} md={4}>
                            <div style={{ width: '100%' }}> <VehiclesTable /> </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div style={{ width: '100%' }}> <TCOTable /> </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Grid container item xs={12} sm={12} md={12} spacing={1.5} direction="column">
                        <Grid item xs={12} sm={8} md={8}>
                            <NotificationTable />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <SinistreTable />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;