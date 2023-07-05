import React from "react";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";

const Carte1FontSize = MICRO;

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
            fontSize={Carte1FontSize}
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
            fontSize={Carte1FontSize}
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
                    fontSize: Carte1FontSize,
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

const CarteTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Carte1FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
            {props.select ? <SelectInput options={props.options} />
            : props.input ? <TypeInput onChange={props.onChange} value={props.value} />
            : props.date ? <DateInput onChange={props.onChange} value={props.value}/>
            :   <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Carte1FontSize}} >
                    {props.value}
                </Typography>
            }
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
            { props.select || props.input || props.date ?
                <Typography style={{ textAlign: "center", fontSize: Carte1FontSize, color: ORANGE }}>
                    *
                </Typography>
            : null
            }
            </Grid>
        </Grid>
    );
};

const CarteTile = (props) => {

    const [selectedDate, setSelectedDate] = React.useState("Date de mise en circulation");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Paper elevation={3} style={{ margin: "0", padding: "1rem" }}>
            <CarteTileField text={"ID Codenekt"} value={props.carte.id} />
            <CarteTileField select text={"Type"} value={props.carte.type} options={props.carte.typeOptions}/>
            <CarteTileField select text={"Marque"} value={props.carte.marque} options={props.carte.marqueOptions}/>
            <CarteTileField select text={"Usage"} value={props.carte.usage} options={props.carte.usageOptions}/>
            <CarteTileField date text={"Contrat"} onChange={handleDateChange} value={selectedDate}/>
            <CarteTileField select text={"Facturation"} value={props.carte.facturation} options={props.carte.facturationOptions}/>
            <CarteTileField input text={"N°"} value={props.carte.numero} onChange={props.carte.onChange}/>
            <Typography style={{ textAlign: "right", fontSize: Carte1FontSize, color: ORANGE, padding: "0.5rem 5rem" }}>
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
        <CodenektButton orange
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer"}
            width={"20%"}
        />
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const Carte1 = (props) => {
    return (
        <Grid container direction={"column"} style={{padding: "0 15rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <CarteTile carte={props.carte}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "right"}}>
                <EnregistrerButton onClick={props.onComplete} />
            </Grid>
        </Grid>
    );
};

export default Carte1;