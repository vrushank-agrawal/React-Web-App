import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Paper, Typography, Grid, Divider } from "@mui/material";
import { FaRegEye } from "react-icons/fa";

import { ORANGEDARK, ORANGELIGHT } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";

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
            white
            blue={true}
            bold={true}
            height={"fit-content"}
            margin={"auto"}
            padding={"0.2rem 1rem"}
            title={"VOIR TOUS LES SINISTRES"}
            width={"8.3rem"}
            startIcon={<FaRegEye size={15} />}
            to="/claims"
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

export default SinistreTable;