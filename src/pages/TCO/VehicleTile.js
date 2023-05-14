import React from "react";
import { Paper, Divider, Grid, Typography, Autocomplete, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { BLACKCN, GREYBACK, ORANGELIGHT } from "../../utils/colors";
import { LITTLE, LITTLE2, MICROPLUS } from "../../utils/fontSize";
import CodenektButton from "../../Components/CodeNektButton";

const SearchVehicle = (props) => {
    return (
        <Autocomplete
            disablePortal
            options={props.allVehicles}
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: ( <InputAdornment position="end"> <SearchIcon /> </InputAdornment> ),
                        type: 'search',
                    }}
                    label="Véhicule"
                    size="small"
                    sx={{ fontSize: MICROPLUS, }}
                />
            )}
            sx={{
                backgroundColor: GREYBACK,
                borderRadius: 50,
                fontSize: MICROPLUS,
                margin: "auto",
                width: "60%",
            }}
        />
    );
};

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
                        <SearchVehicle allVehicles={props.allVehicles} />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}
                    sx={{display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "1rem"}}
                >
                    <CodenektButton
                        blue={true}
                        bold={true}
                        margin={"1rem auto"}
                        padding={"0.5rem 1rem"}
                        size={LITTLE2}
                        title={"RÉSULTATS"}
                        white={true}
                        width={"fit-content"}
                    />
                </Grid>
            </Grid>
        </Paper>
    </>
    );
};


export default VehicleTile;