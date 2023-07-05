import React from "react";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO } from "../../../utils/fontSize";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";
import { PrecedentButton, EnregistrerButton, EnregistrerContinuerButton } from "../utils/Buttons";

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
    const handleDateChange = (date) => {setSelectedDate(date);};

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
// Main Component
// ---------------------------------------------

const Sinistre3 = (props) => {
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

export default Sinistre3;