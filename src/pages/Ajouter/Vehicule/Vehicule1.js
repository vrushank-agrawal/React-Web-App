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

const Vehicule1FontSize = MICRO;

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
            fontSize={Vehicule1FontSize}
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
            fontSize={Vehicule1FontSize}
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
                    fontSize: Vehicule1FontSize,
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

const VehiculeTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule1FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
            {props.select ? <SelectInput option={props.options} />
            : props.input ? <TypeInput onChange={props.onChange} value={props.value} />
            : props.date ? <DateInput onChange={props.onChange} value={props.value}/>
            :   <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Vehicule1FontSize}} >
                    {props.id}
                </Typography>
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
            { props.select || props.input || props.date ?
                <Typography style={{ textAlign: "center", fontSize: Vehicule1FontSize, color: ORANGE }}>
                    *
                </Typography>
            : null
            }
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
            <VehiculeTileField text={"ID Codenekt"} value={props.id} />
            <VehiculeTileField select text={"Marque"} value={props.marque} options={categories}/>
            <VehiculeTileField select text={"Modèle"} value={props.modele} options={categories}/>
            <VehiculeTileField input text={"Version"} value={props.version} />
            <VehiculeTileField select text={"Boite manuelle"} value={props.boite} options={categories}/>
            <VehiculeTileField input text={"Puissance Fiscale"} value={props.puissance}/>
            <VehiculeTileField select text={"Carburant"} value={props.carburant} options={categories}/>
            <VehiculeTileField date text={"Mise en circulation"} onChange={handleDateChange} value={selectedDate}/>
            <VehiculeTileField select text={"Statut"} value={props.statut} options={categories}/>
            <Typography style={{ textAlign: "right", fontSize: Vehicule1FontSize, color: ORANGE, padding: "0.5rem 5rem" }}>
                * Complétez les champs requis
            </Typography>
        </Paper>
    );
};

// ---------------------------------------------
// BUTTONS
// ---------------------------------------------

const EnregistrerButton = (props) => {
    return (
        <CodenektButton
            grey
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer"}
            width={"20%"}
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
            width={"25%"}
        />
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const LocalContent = (props) => {
    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <VehiculeTile id={props.id}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "right"}}>
                <EnregistrerButton onClick={props.onRegister} />
                <EnregistrerContinuerButton onClick={props.onComplete} />
            </Grid>
        </Grid>
    );
};


const Vehicule1 = (props) => {

    const onRegister = () => {
        console.log("Vehicule1");
    }

    const onComplete = () => {
        props.onComplete(2);
    }

    return (
        <Grid container direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={1}
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
                <LocalContent onComplete={onComplete} onRegister={onRegister} id={"0987"} />
            </Grid>
        </Grid>
    );
}

export default Vehicule1;