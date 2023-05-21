import React from "react";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";

const Sinistre3FontSize = MICRO;

// ---------------------------------------------
// INPUT TYPES
// ---------------------------------------------

const TypeInput = (props) => {
    return (
        <textarea
            cols={70}
            fontSize={Sinistre3FontSize}
            margin="0"
            onChange={props.onChange}
            rows={10}
            style={{
                backgroundColor: GREYBACK,
                borderRadius: "2%",
                color: BLACKCN,
            }}
            value={props.value}
            width="inherit"
        />
    );
};

const DatePickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: GREYBACK,
                    fontSize: Sinistre3FontSize,
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

const SinistreTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row" }}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Sinistre3FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
            { props.date ?
                <DateInput onChange={props.onChange} value={props.value}/>
            :
                <TypeInput onChange={props.onChange} value={props.value} />
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <Typography style={{ textAlign: "center", fontSize: Sinistre3FontSize, color: ORANGE }}>
                    *
                </Typography>
            </Grid>
        </Grid>
    );
};

const SinistreTile = (props) => {

    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Paper elevation={3} style={{ margin: "0", padding: "1rem" }}>
            <SinistreTileField date text={"Date"} onChange={handleDateChange} value={selectedDate} />
            <SinistreTileField text={"Commentaire"} value={"Details"} />
            <Typography style={{ textAlign: "right", fontSize: Sinistre3FontSize, color: ORANGE, padding: "0.5rem 5rem" }}>
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
        <CodenektButton grey
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
            <Grid item xs={12} sm={12} md={12}>
                <SinistreTile />
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


const Sinistre3 = (props) => {

    const onRegister = () => {
        console.log("Sinistre3");
    }

    const onComplete = () => {
        props.onComplete(4);
    }

    const onPrevious = () => {
        props.onComplete(2);
    }

    return (
        <Grid container direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={3}
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
                <LocalContent onComplete={onComplete} onRegister={onRegister} onPrevious={onPrevious} />
            </Grid>
        </Grid>
    );
}

export default Sinistre3;