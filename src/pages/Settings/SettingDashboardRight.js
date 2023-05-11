import React, {useState} from "react";
import {Box, Paper, Typography, Select, MenuItem} from "@mui/material";

// CodeNekt imports
import {FONTSEMIBOLD, FONTBOLD, FONTREGULAR} from "../../utils/fonts";
import { FONTSEMIBIG } from "../../utils/fontSize";
import { BLACKCN, BLUECN, ORANGEDARK, ORANGELIGHT } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";
import { FormControl } from "@mui/base";

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
        <Paper sx={{ p: 4, borderRadius: 2 }}
               elevation={3}
        >
            <Box sx={{ margin: "0 0 10% 0", display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} >
                    TVA ENTREPRISE
                </Typography>
            </Box>
            <Box sx={{ margin: "10%", display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
                <Typography fontSize={FONTREGULAR} fontWeight={FONTBOLD} color={BLACKCN} sx={{margin: "0 0 2% 2%",}}>
                    Selectioner le taux de TVA
                </Typography>
                <Select
                    value={TVAvalue}
                    label="TVA"
                    variant="outlined"
                    size="small"
                    sx={{ width: "70%", margin: "0 0 2% 2%",}}
                    onChange={handleTVAChange}
                >
                    <MenuItem value={10}>10%</MenuItem>
                    <MenuItem value={20}>20%</MenuItem>
                </Select>
                <CodenektButton title="ENREGISTRER"
                    gradient dir={"to right"} left={ORANGEDARK} right={ORANGELIGHT}
                    width={"30%"}
                    onClick={handleSaveClick}
                />
            </Box>

            {/* ------------------- SERVICES --------------------- */}

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", mt: 2 }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} color={BLUECN} sx={{margin: "0 0 2% 2%",}}>
                    DÉPARTEMENTS/SERVICES
                </Typography>
            </Box>
            <Box sx={{ margin: "10%", display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
                <Typography fontSize={FONTREGULAR} fontWeight={FONTBOLD} color={BLACKCN} sx={{margin: "0 0 2% 2%",}}>
                    Ajouter un service:
                </Typography>
                <Select
                    sx={{margin: "0 0 2% 2%"}}
                    multiple
                    width="70%"
                    minWidth="70%"
                    value={ServicesValue}
                    onChange={handleServicesChange}
                    renderValue={renderServices}
                >
                    <MenuItem value={"COMMERCIAL"}>COMMERCIAL</MenuItem>
                    <MenuItem value={"MARKETING"}>MARKETING</MenuItem>
                    <MenuItem value={"SAV"}>SAV</MenuItem>
                </Select>
                <CodenektButton title="ENREGISTRER"
                    gradient dir={"to right"} left={ORANGEDARK} right={ORANGELIGHT}
                    width={"30%"}
                    onClick={handleSaveClick}
                />
            </Box>
        </Paper>
  );
};

export default SettingsDashboardRight;