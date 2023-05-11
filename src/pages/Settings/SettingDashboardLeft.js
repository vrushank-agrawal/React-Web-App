import React, {useState} from "react";
import {Grid, Box, Button, Paper, TextField, Typography, Switch} from "@mui/material";

// CodeNekt imports
import {FONTSEMIBOLD, FONTBOLD} from "../../utils/fonts";
import { FONTSEMIBIG } from "../../utils/fontSize";
import { BLUECN } from "../../utils/colors";

// settings imports
import SettingGridItem from "./SettingGridItem";
import SettingCommunicationSwitchItem from "./SettingCommunicationSwitchItem";

const SettingsDashboardLeft = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [values, setValues] = useState({
        ID: "ID",
        Nom: "Nom",
        Prénom: "Prénom",
        Email: "Email",
        motdepasse: "Mot de passe",
    });

    const [communicationValues, setCommunicationValues] = useState({
        type1: false,
        type2: false,
        type3: false,
        type4: false,
    });

    const handleModifyClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = () => {
        setIsEditable(false);
        // TODO: Save changes to fields
    };

    const handleSwitchChange = (name) => (value) => {
        setCommunicationValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Paper sx={{ p: 4, borderRadius: 2 }}
               elevation={3}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <SettingGridItem
                    label="ID"
                    value={values.ID}
                    isEditable={isEditable}
                />
                <SettingGridItem
                    label="Nom"
                    value={values.Nom}
                    isEditable={isEditable}
                />
                <SettingGridItem
                    label="Prénom"
                    value={values.Prénom}
                    isEditable={isEditable}
                />
                <SettingGridItem
                    label="Email"
                    value={values.Email}
                    isEditable={isEditable}
                />
                <SettingGridItem
                    label="Mot de passe"
                    value={values.motdepasse}
                    isEditable={isEditable}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {!isEditable ? (
                <Button variant="contained" onClick={handleModifyClick}> Modify </Button>
            ) : (
                <Button variant="contained" onClick={handleSaveClick}> Save </Button>
            )}
            </Box>

            {/* ------------------- COMMUNICATION --------------------- */}

            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} >
                    COMMUNICATION
                </Typography>
            </Box>

            <Box sx={{ p:2, display: "flex", flexDirection: "column", gap: 1, justifyContent: "flex-start"}}>
                <SettingCommunicationSwitchItem
                    label="Type d'evenement/Notification"
                    onChange={handleSwitchChange("type1")}
                    checked={communicationValues.type1}
                />
                <SettingCommunicationSwitchItem
                    label="Type d'evenement/Notification"
                    onChange={handleSwitchChange("type2")}
                    checked={communicationValues.type2}
                />
                <SettingCommunicationSwitchItem
                    label="Type d'evenement/Notification"
                    onChange={handleSwitchChange("type3")}
                    checked={communicationValues.type3}
                />
                <SettingCommunicationSwitchItem
                    label="Type d'evenement/Notification"
                    onChange={handleSwitchChange("type4")}
                    checked={communicationValues.type4}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" onClick={handleSwitchChange}>
                    Enregistrer
                </Button>
            </Box>

        </Paper>
  );
};

export default SettingsDashboardLeft;