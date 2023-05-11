import React, {useState} from "react";
import {Grid, Box, Button, Paper, TextField, Typography, Switch} from "@mui/material";

// CodeNekt imports
import {FONTSEMIBOLD, FONTBOLD} from "../../utils/fonts";
import { FONTSEMIBIG } from "../../utils/fontSize";
import { BLUECN } from "../../utils/colors";

const SettingsDashboardRight = () => {

    return (
        <Paper sx={{ p: 4, borderRadius: 2 }}
               elevation={3}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            </Box>

            {/* ------------------- COMMUNICATION --------------------- */}

            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} >
                    COMMUNICATION
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            </Box>

        </Paper>
  );
};

export default SettingsDashboardRight;