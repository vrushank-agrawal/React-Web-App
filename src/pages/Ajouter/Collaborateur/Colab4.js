import React from "react";
import { Grid, Typography, createTheme } from "@mui/material";

// CodeNekt imports
import CodeNektSearch from "../../../Components/CodeNektSearch";
import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE, ORANGEDARK, ORANGELIGHT } from "../../../utils/colors";
import { LITTLE, LITTLE2, MINIBIG } from "../../../utils/fontSize";
import { TCOVehicles as colabData } from "../../utils/TCO-test-data";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";

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
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </Grid>
        </Grid>
    );
};

const LocalContent = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>

            {/* ------------------ Search Vehicle ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={BLACKCN} fontSize={MINIBIG} style={{margin: "auto"}}>
                    Rechercher du véhicule
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{width: "40%", margin: "auto"}}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Grid item xs={11} sm={11} md={11}>
                        <CodeNektSearch
                            label={"Véhicule"}
                            searchData={props.searchData}
                            width={"100%"}
                        />
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Typography style={{color: ORANGE, fontSize: MINIBIG}}> * </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------ Choose Date ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{padding: "2rem 20rem 0 20rem"}}>
                <ChooseDate />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={ORANGE} fontSize={LITTLE} style={{margin: "1rem auto auto auto"}}>
                    * Complétez les champs obligatoires
                </Typography>
            </Grid>

            {/* ------------------ Button ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <CodenektButton
                    bold
                    gradient
                    dir={"to right"}
                    left={ORANGEDARK}
                    right={ORANGELIGHT}
                    onClick={props.onComplete}
                    title="AFFECTER LE VÉHICULE"
                />
            </Grid>
        </Grid>
    );
};

const Colab4 = (props) => {

    const VehicleData = colabData.map((item) => ({
        label: `${item.immat} ${item.marque} ${item.modele}`,
    }));

    const onComplete = () => {
        props.onComplete(5);
    }

    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={4}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "1rem"}}>
                <Typography
                    color={GREYTEXT2}
                    fontSize={MINIBIG}
                    style={{ textAlign: "center" }}
                >
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <LocalContent
                    searchData={VehicleData}
                    onComplete={onComplete}
                />
            </Grid>
        </Grid>
    );
};

export default Colab4;