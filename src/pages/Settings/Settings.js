import React, { useState } from "react";
import { Grid } from "@mui/material"

// CodeNekt imports
import { FONTSEMIBOLD, FONTBOLD } from "../../utils/fonts";
import { FONTREGULAR, FONTSEMIBIG } from "../../utils/fontSize";

// Settings imports
import SettingsDashboardLeft from "./SettingDashboardLeft";
import SettingsDashboardRight from "./SettingDashboardRight";

const Settings = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                PARAMÈTRES
            </h1>
            <Grid container spacing={3} >
                <Grid item xs={6} style={{width: "60vh"}}>
                    <SettingsDashboardLeft />
                </Grid>
                <Grid item xs={6} style={{width: "60vh"}}>
                    <SettingsDashboardRight />
                </Grid>
            </Grid>
        </div>
    );
};

export default Settings