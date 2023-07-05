import React from "react";
import { Paper, Divider, Grid, Typography, List, ListItem, Stack } from "@mui/material";
import { ORANGELIGHT } from "../../utils/colors";
import { CodeNektProfile } from "../../Components/CodeNektIcons";
import { MICRO } from "../../utils/fontSize";
import TCOChip from "../utils/TCOChip";

const TCOTableValueSize = "1.2rem";
const TCOTableFontsize = MICRO;

const VehiclesTableCellItem = (props) => {
    return (
    <Grid item xs={12} sm={2.5} md={2.5}>
        <Typography variant="h6" style={{ fontSize: TCOTableFontsize, }} >
            {props.label}
        </Typography>
    </Grid>
    );
};

const VehiclesTableItem = (props) => {
    return (
    <>
    <Stack direction="column" spacing={0}>
        <Typography variant="h6" style={{ fontSize: TCOTableFontsize, }} >
            {props.duration}
        </Typography>
        <Grid container spacing={1} direction="row" gap={1} >
            <VehiclesTableCellItem label={props.immat} />
            <VehiclesTableCellItem label={props.marque} />
            <VehiclesTableCellItem label={props.modele} />
            <VehiclesTableCellItem label={props.cat} />
        </Grid>
        <Divider sx={{ backgroundColor: ORANGELIGHT, width: "85%"}} />
    </Stack>
    </>
    );
};

const CollaboratorTile = (props) => {
    return (
        <Paper elevation={3}
            style={{
                paddingBottom: "1rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            {/* --------------- HEADING ----------------- */}

            <Typography
                variant="h6"
                sx={{
                    alignContent: "center",
                    fontWeight: "bold",
                    margin: "auto",
                    padding: "1rem",
                }}
            >
                COÛT PAR COLLABORATEUR
            </Typography>

            <Divider sx={{ backgroundColor: ORANGELIGHT }} />

            {/* --------------- TABLE GRID ----------------- */}

            <Grid item xs={12} sm={12} md={12} margin={4}>
                <Grid container spacing={1.5} direction="column" gap={1}
                    sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}
                >
                    {/* ----------------- PROFILE ------------------ */}

                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={1} gap={0} direction="row"
                            sx={{display: "flex", justifyContent: "center"}}
                        >
                            <Grid item xs={12} sm={12} md={4}
                                sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}
                            >
                                <CodeNektProfile size={100} style={{margin: "0 auto"}}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}
                                sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}
                            >
                                <List disablePadding
                                    sx={{margin: "0 auto 0 0"}}
                                >
                                    <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> NOM </ListItem>
                                    <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> PRENOM </ListItem>
                                    <ListItem sx={{padding: "0 0 0.2rem 1rem"}}> CAT </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* ----------------- VEHICLES TABLE ------------------ */}

                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={0}
                            style={{
                                display: "flex",
                                margin: "1rem 1rem",
                            }}
                            direction={"column"}
                        >
                            { props.vehicles.map((vehicle) => (
                                <VehiclesTableItem
                                    duration={vehicle.duration}
                                    immat={vehicle.immat}
                                    marque={vehicle.marque}
                                    modele={vehicle.modele}
                                    cat={vehicle.cat}
                                />
                            ))}
                        </Grid>
                    </Grid>

                    {/* ----------------- COST GRID ------------------ */}

                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={2}
                            style={{
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                margin: "0",
                            }}
                        >
                            <Grid item xs={12} sm={6} md={5}>
                                <Typography variant="h6" style={{ fontSize: TCOTableFontsize, }} >
                                    COÛT MOYEN MENSUEL
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={7}>
                                <TCOChip
                                    label="212,90 €"
                                    fontSize={TCOTableValueSize}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ margin: "0" }}>
                            <Grid item xs={12} sm={6} md={5}>
                                <Typography variant="h6" style={{ fontSize: TCOTableFontsize }} >
                                    COÛT TOTAL
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={7}>
                                <TCOChip
                                    label="12 212,90 €"
                                    fontSize={TCOTableValueSize}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CollaboratorTile;