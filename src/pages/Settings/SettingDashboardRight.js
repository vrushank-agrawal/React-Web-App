import React, {useState} from "react";
import { Box, Paper, Typography, Select, MenuItem } from "@mui/material";

// CodeNekt imports
import { FONTBOLD, FONTREGULAR} from "../../utils/fonts";
import { FONTSEMIBIG, MICRO } from "../../utils/fontSize";
import { BLACKCN, BLUECN, GREYBACK, ORANGELIGHT } from "../../utils/colors";
import CodenektButton from "../../Components/CodeNektButton";
import CodeNektSelect from "../../Components/CodeNektSelect";

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
                <CodeNektSelect
                    label="TVA"
                    onChange={handleTVAChange}
                    options={[
                        {label: "10%", value: "10"},
                        {label: "20%", value: "20"},
                    ]}
                    value={TVAvalue}
                />
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
                <CodeNektSelect multiple
                    label="SERVICE"
                    renderValue={renderServices}
                    onChange={handleServicesChange}
                    options={[
                        {label: "COMMERCIAL", value: "COMMERCIAL"},
                        {label: "MARKETING", value: "MARKETING"},
                        {label: "SAV", value: "SAV"},
                    ]}
                    value={ServicesValue}
                />
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