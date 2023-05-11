import React, { useState} from "react";
import { FormControlLabel, Switch } from "@mui/material";

const SettingCommunicationSwitchItem = (props) => {

    const handleSwitchChange = (event) => {
        props.onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            value=""
            control={<Switch color="primary" />}
            label={props.label}
            labelPlacement="start"
            onChange={handleSwitchChange}
        />
    );
};

export default SettingCommunicationSwitchItem;