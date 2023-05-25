import React, {useState} from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";

// CodeNekt imports
import { FONTBOLD} from "../../utils/fonts";
import { FONTSEMIBIG, MICRO } from "../../utils/fontSize";
import { BLUECN } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";

// settings imports
import SettingGridItem from "./SettingGridItem";
import SettingCommunicationSwitchItem from "./SettingCommunicationSwitchItem";

const SettingsDashboardLeft = () => {
    const [isEditableEmail, setIsEditableEmail] = useState(false);
    const [isEditablePass, setIsEditablePass] = useState(false);
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

    const handleModifyClickEmail = () => {
        setIsEditableEmail(true);
    };

    const handleSaveClickEmail = () => {
        setIsEditableEmail(false);
        // TODO: Save changes to fields
    };

    const handleModifyClickPass = () => {
        setIsEditablePass(true);
    };

    const handleSaveClickPass = () => {
        setIsEditablePass(false);
    };

    const handleSwitchChange = (name) => (value) => {
        setCommunicationValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Paper sx={{ p: 2, borderRadius: 2 }}
               elevation={3}
        >
            <Box sx={{ p:2, display: "flex", flexDirection: "column", gap: 1}}>
                <SettingGridItem
                    label="ID"
                    value={values.ID}
                />
                <SettingGridItem
                    label="Nom"
                    value={values.Nom}
                />
                <SettingGridItem
                    label="Prénom"
                    value={values.Prénom}
                />
                <SettingGridItem
                    button
                    label="Email"
                    value={values.Email}
                    isEditable={isEditableEmail}
                    handleModifyClick={handleModifyClickEmail}
                    handleSaveClick={handleSaveClickEmail}
                />
                <SettingGridItem
                    button
                    label="Mot de passe"
                    value={values.motdepasse}
                    isEditable={isEditablePass}
                    handleModifyClick={handleModifyClickPass}
                    handleSaveClick={handleSaveClickPass}
                />
            </Box>

            {/* ------------------- COMMUNICATION --------------------- */}

            <Box sx={{ p:2, display: "flex", justifyContent: "flex-start", mt: 2 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} >
                    COMMUNICATION
                </Typography>
            </Box>

            <Box sx={{ p:2, display: "column", gap: 0, justifyContent: "center" }}>
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
            <Box sx={{ p:2, display: "flex", justifyContent: "center", mt: 2 }}>
                <Grid container xs={12} direction="row" justifyContent="space-around" alignItems="center">
                    <Grid item xs={8}>
                        <></>
                    </Grid>
                    <Grid item xs={4}>
                        <CodenektButton
                            orange
                            bold
                            margin={"0 0 0 auto"}
                            onClick={handleSwitchChange}
                            padding={"0.4rem 0.8rem"}
                            size={MICRO}
                            title="Enregistrer"
                            variant={"contained"}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
  );
};

export default SettingsDashboardLeft;