import React, { useState} from "react";
import { Grid, FormControlLabel, Switch, Typography } from "@mui/material";
import { LITTLE2, MICRO } from "../../utils/fontSize";

const SettingCommunicationSwitchItem = (props) => {

    const handleSwitchChange = (event) => {
        props.onChange(event.target.checked);
    };

    return (
        <Grid container xs={12} direction="row" justifyContent="space-around" alignItems="center">
            <Grid item xs={8}>
                <Typography sx={{ fontSize: LITTLE2 }}>
                    {props.label}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Switch color="primary" onChange={handleSwitchChange} />
            </Grid>
        </Grid>
    );
};

export default SettingCommunicationSwitchItem;