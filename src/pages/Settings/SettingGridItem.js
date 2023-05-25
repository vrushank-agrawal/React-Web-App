import React,{ useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

// CodeNekt imports
import CodenektButton from "../../Components/CodeNektButton";
import { LITTLE2, MICRO } from "../../utils/fontSize";


const SettingCodeNektButton = (props) => {

    const TempButton = (props) => {
        return (
            <CodenektButton
            orange
            bold
            onClick={props.onClick}
            padding={"0.4rem 0.8rem"}
            size={MICRO}
            title={props.title}
            variant={"contained"}
        />
        );
    };

    return (
        <>
        {!props.isEditable ? (
            <TempButton onClick={props.handleModifyClick} title="Modifier" />
        ) : (
            <TempButton onClick={props.handleSaveClick} title="Enregistrer"/>
        )}
        </>
    );
};

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
                <Typography sx={{ fontSize: LITTLE2}}>
                    {props.label}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {props.button && props.isEditable ? (
                    <TextField
                        label=""
                        name={props.label}
                        value={values[props.label]}
                        onChange={handleInputChange}
                        disabled={!props.isEditable}
                        variant="standard"
                        margin="normal"
                        sx={{ fontSize: LITTLE2 }} />
                ) : (
                    <Typography sx={{ fontSize: LITTLE2}}>
                        {props.label}
                    </Typography>
                )}
            </Grid>
            <Grid item xs={4}>
                {props.button ? (
                    <SettingCodeNektButton
                        isEditable={props.isEditable}
                        handleModifyClick={props.handleModifyClick}
                        handleSaveClick={props.handleSaveClick}
                    />
                ) : (
                    <></>
                )}
            </Grid>
        </Grid>
    );
};

export default SettingGridItem;