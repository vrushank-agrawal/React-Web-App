import React from "react";
import { Paper, Divider, Grid, Typography, Autocomplete, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { BLACKCN, GREYBACK, ORANGELIGHT, WHITECN } from "../../utils/colors";
import { LITTLE, LITTLE2, MICROPLUS } from "../../utils/fontSize";
import CodenektButton from "../../Components/CodeNektButton";

import CodeNektSearch from "../../Components/CodeNektSearch";

const VehicleTile = (props) => {
    return (
    <>
        <Paper elevation={3}
            style={{
                paddingBottom: "3rem",
                display: "flex", justifyContent: "center", flexDirection: "column"
        }}>

        {/* ---------------- HEADING ----------------- */}

            <Typography
                variant="h6"
                sx={{
                    alignContent: "center",
                    fontWeight: "bold",
                    margin: "auto",
                    padding: "1rem",
                }}
            >
                COÛT PAR VÉHICULE
            </Typography>
            <Divider sx={{ backgroundColor: ORANGELIGHT }} />

            {/* ---------------- VEHICLE SEARCH ----------------- */}

            <Grid item xs={12} sm={12} md={12} >
                <Grid item xs={12} sm={12} md={12}
                    sx={{display: "flex", justifyContent: "center", flexDirection: "column", marginBottom: "1rem"}}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            margin: "auto",
                            marginTop: "2rem",
                            color: BLACKCN,
                            fontSize: LITTLE2
                        }}
                    >
                        Recherche du véhicule
                    </Typography>
                </Grid>

                <Grid container spacing={1.5} direction="column" gap={1}
                    sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}
                >
                    <Grid item xs={12} sm={12} md={12}
                        sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}
                    >
                        <CodeNektSearch
                            label={"Véhicule"}
                            searchData={props.allVehicles}
                            width={"60%"}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}
                    sx={{display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "1rem"}}
                >
                    <CodenektButton
                        blue
                        bold
                        color={WHITECN}
                        margin={"1rem auto"}
                        padding={"0.5rem 1rem"}
                        size={LITTLE2}
                        title={"RÉSULTATS"}
                    />
                </Grid>
            </Grid>
        </Paper>
    </>
    );
};


export default VehicleTile;