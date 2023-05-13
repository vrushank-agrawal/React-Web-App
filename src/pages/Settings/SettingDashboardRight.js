import React, {useState} from "react";
import {Box, Paper, Typography, Select, MenuItem} from "@mui/material";

// CodeNekt imports
import { FONTBOLD, FONTREGULAR} from "../../utils/fonts";
import { FONTSEMIBIG, MICRO } from "../../utils/fontSize";
import { BLACKCN, BLUECN, GREYBACK, ORANGELIGHT } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";

const SettingsDashboardRight = () => {
    const [TVAvalue, setValues] = useState(0);
    const [ServicesValue, setServicesValue] = useState([]);

    const handleTVAChange = (event) => {
        setValues(event.target.value);
    };

    const handleServicesChange = (event) => {
        setServicesValue(event.target.value);
    };

    const renderServices = () => {
        return ServicesValue.join(", ");
    };

    const handleSaveClick = () => {
        // TODO: Save changes to fields
    };

    return (
        <Paper sx={{
                p: 4,
                borderRadius: 2,
                paddingBottom: "10%",
            }}
            elevation={3}
        >
            {/* ------------------- TVA --------------------- */}

            <Box sx={{ marginBottom: "5%", display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} >
                    TVA ENTREPRISE
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
                <Typography fontSize={FONTREGULAR} color={BLACKCN} sx={{margin: "0 0 2% 2%",}}>
                    Sélectioner le taux de TVA
                </Typography>
                <Select
                    label="TVA"
                    onChange={handleTVAChange}
                    size="small"
                    sx={{
                        backgroundColor: GREYBACK,
                        fontSize: MICRO,
                        margin: "0 0 2% 2%",
                        '& svg': {
                            color: ORANGELIGHT,
                        },
                    }}
                    value={TVAvalue}
                    variant="outlined"
                >
                    <MenuItem value={10}>10%</MenuItem>
                    <MenuItem value={20}>20%</MenuItem>
                </Select>
                <CodenektButton
                    orange
                    bold
                    margin={"0 0 0 auto"}
                    onClick={handleSaveClick}
                    padding={"0.8rem 1rem"}
                    size={MICRO}
                    title="ENREGISTRER"
                    variant={"contained"}
                />
            </Box>

            {/* ------------------- SERVICES --------------------- */}

            <Box sx={{ paddingTop: "10%", display: "flex", flexDirection: "column", justifyContent: "flex-start", mt: 2 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} sx={{margin: "0 0 2% 2%",}}>
                    DÉPARTEMENTS/SERVICES
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
                <Typography fontSize={FONTREGULAR} color={BLACKCN} sx={{margin: "0 0 2% 2%",}}>
                    Ajouter un service:
                </Typography>
                <Select
                    multiple
                    onChange={handleServicesChange}
                    renderValue={renderServices}
                    size="small"
                    sx={{
                        backgroundColor: GREYBACK,
                        fontSize: MICRO,
                        margin: "0 0 2% 2%",
                        '& svg': {
                            color: ORANGELIGHT,
                        },
                    }}
                    value={ServicesValue}
                >
                    <MenuItem value={"COMMERCIAL"}>COMMERCIAL</MenuItem>
                    <MenuItem value={"MARKETING"}>MARKETING</MenuItem>
                    <MenuItem value={"SAV"}>SAV</MenuItem>
                </Select>
                <CodenektButton
                    orange
                    bold
                    margin={"0 0 0 auto"}
                    onClick={handleSaveClick}
                    padding={"0.8rem 1rem"}
                    size={MICRO}
                    title="ENREGISTRER"
                    variant={"contained"}
                />
            </Box>
        </Paper>
  );
};

export default SettingsDashboardRight;