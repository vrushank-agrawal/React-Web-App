import React from "react";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import { categories } from "../../utils/CategorieDefinition";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";

const Vehicule2FontSize = MICRO;

const VehiculeData = {
    numeroContrat: "",
    duree: null,
    dateEntree: null,
    dateSortie: null,
    kmContrat: 0,
    pneusHIVER: [
        {
            label: "1",
            value: 1,
        },
        {
            label: "2",
            value: 2,
        },
    ],
    pneusETE: [
        {
            label: "1",
            value: 1,
        },
        {
            label: "2",
            value: 2,
        },
    ],
    loyerHT: [
        {
            label: "100",
            value: 100,
        },
        {
            label: "200",
            value: 200,
        },
    ],
    loyerFreq: [
        {
            label: "Mensuel",
            value: 1,
        },
        {
            label: "Annuel",
            value: 2,
        },
    ],
};


// ---------------------------------------------
// INPUT TYPES
// ---------------------------------------------

const SelectInput = (props) => {
    const [category, setCategory] = React.useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <CodeNektSelect
            fontSize={Vehicule2FontSize}
            height={"1rem"}
            margin="0"
            onChange={handleChange}
            options={props.options}
            value={category}
        />
    );
};

const TypeInput = (props) => {
    return (
        <CodeNektInput
            fontSize={Vehicule2FontSize}
            // height={"1rem"}
            margin="0"
            onChange={props.onChange}
            value={props.value}
        />
    );
};

const DatePickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: GREYBACK,
                    fontSize: Vehicule2FontSize,
                    height: "1rem",
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    height: "1rem",
                },
            },
        },
    },
});

const DateInput = (props) => {
    return (
        <CodeNektDatePicker
            onChange={props.onChange}
            theme={DatePickerTheme}
            value={props.value}
        />
    );
};

// ---------------------------------------------
// Vehicle Tile
// ---------------------------------------------

const DoubleSelect = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={5} md={5} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <SelectInput options={props.options1} />
            </Grid>
            <Grid item xs={12} sm={1} md={1} style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <Typography style={{ textAlign: "center", fontSize: Vehicule2FontSize, color: ORANGE }}>
                    *
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "row", justifyContent: "right"}}>
                <SelectInput options={props.options2} />
            </Grid>
        </Grid>
    );
};

const VehiculeTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule2FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
            { props.date ?
                <DateInput onChange={props.onChange} value={props.value}/>
            : props.select ?
                <DoubleSelect options1={props.options1} options2={props.options2} />
            :
                <TypeInput onChange={props.onChange} value={props.value} />
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <Typography style={{ textAlign: "center", fontSize: Vehicule2FontSize, color: ORANGE }}>
                    *
                </Typography>
            </Grid>
        </Grid>
    );
};

const VehiculeTile = (props) => {

    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Paper elevation={3} style={{ margin: "0", padding: "1rem" }}>
            <VehiculeTileField text={"Numéro de contrat"} value={props.vehicule.numeroContrat} />
            <VehiculeTileField text={"Durée"} value={props.vehicule.duree} />
            <VehiculeTileField date text={"Date d'entrée"} value={props.vehicule.dateEntree} />
            <VehiculeTileField date text={"Date de sortie"} value={props.vehicule.dateSortie} />
            <VehiculeTileField text={"Km au contrat"} value={props.vehicule.kmContrat} />
            <VehiculeTileField select text={"Pneus au contrat"} options1={props.vehicule.pneusHIVER} options2={props.vehicule.pneusETE} />
            <VehiculeTileField select text={"Loyer HT"} options1={props.vehicule.loyerHT} options2={props.vehicule.loyerFreq} />
            <Typography style={{ textAlign: "right", fontSize: Vehicule2FontSize, color: ORANGE, padding: "0.5rem 5rem" }}>
                * Complétez les champs requis
            </Typography>
        </Paper>
    );
};

// ---------------------------------------------
// BUTTONS
// ---------------------------------------------

const PrecedentButton = (props) => {
    return (
        <CodenektButton grey
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Précédent"}
            width={"40%"}
        />
    );
};

const EnregistrerButton = (props) => {
    return (
        <CodenektButton
            grey
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer"}
            width={"30%"}
        />
    );
};

const EnregistrerContinuerButton = (props) => {
    return (
        <CodenektButton
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer et continuer"}
            width={"40%"}
        />
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const LocalContent = (props) => {
    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12} style={{width: "150%", paddingBottom: "1rem"}}>
                <VehiculeTile vehicule={props.vehicule}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container direction={"row"}>
                    <Grid item xs={12} sm={4} md={4}>
                        <PrecedentButton onClick={props.onPrevious} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} style={{display: "flex", justifyContent: "right"}}>
                        <EnregistrerButton onClick={props.onRegister} />
                        <EnregistrerContinuerButton onClick={props.onComplete} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};


const Vehicule2 = (props) => {

    const onRegister = () => {
        console.log("Vehicule2");
    }

    const onComplete = () => {
        props.onComplete(3);
    }

    const onPrevious = () => {
        props.onComplete(1);
    }

    return (
        <Grid container direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={2}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "0.5rem"}}>
                <Typography
                    color={GREYTEXT2}
                    fontSize={MINIBIG}
                    style={{ textAlign: "center" }}
                >
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <LocalContent onComplete={onComplete} onRegister={onRegister} onPrevious={onPrevious} vehicule={VehiculeData}/>
            </Grid>
        </Grid>
    );
}

export default Vehicule2;