import React,{ useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

const SettingGridItem = (props) => {
    const [values, setValues] = useState({
        [props.label]: props.value,
    });

    const handleInputChange = (event) => {
        setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
        }));
    };

    return (
        <Grid container xs={12}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item xs={4}>
                <Typography>
                    {props.label}:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField
                    label=""
                    name={props.label}
                    value={values[props.label]}
                    onChange={handleInputChange}
                    disabled={!props.isEditable}
                    variant="standard"
                    margin="normal"
                />
            </Grid>
        </Grid>
    );
};

export default SettingGridItem;