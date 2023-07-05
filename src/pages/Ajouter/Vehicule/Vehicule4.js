import React from "react";
import { Grid, Typography, createTheme } from "@mui/material";

// CodeNekt imports
import CodeNektSearch from "../../../Components/CodeNektSearch";
import { BLACKCN, GREYTEXT2, GREYBACK, } from "../../../utils/colors";
import { LITTLE2, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";
import { GradientButton } from "../utils/Buttons";

const DatePickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: GREYBACK,
                    fontSize: LITTLE2,
                    height: "2rem",
                },
            },
        },
    },
});

const ChooseDate = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Grid container spacing={1.5} direction={"row"} style={{display:"flex", alignItems:"center"}}>
            <Grid item xs={12} sm={6} md={6}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: LITTLE2 }}>
                    DATE DE FIN D'AFFECTATION
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <CodeNektDatePicker
                    theme={DatePickerTheme}
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </Grid>
        </Grid>
    );
};

const Vehicule4 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>

            {/* ------------------ Search Vehicle ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={BLACKCN} fontSize={MINIBIG} style={{margin: "auto"}}>
                    Rechercher du collaborateur
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{width: "40%", margin: "auto"}}>
                <CodeNektSearch
                    label={"Nom"}
                    searchData={props.searchData}
                    width={"100%"}
                />
            </Grid>

            {/* ------------------ Choose Date ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{padding: "2rem 20rem 2rem 20rem"}}>
                <ChooseDate />
            </Grid>

            {/* ------------------ Button ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
                <CodenektButton bold grey
                    color={BLACKCN}
                    onClick={props.onComplete}
                    title="PASSER CETTE ETAPE"
                />
                <GradientButton
                    onComplete={props.onComplete}
                    title="AFFECTER LE COLLABORATEUR"
                />
            </Grid>
        </Grid>
    );
};

export default Vehicule4;