import React from "react";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import { GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO } from "../../../utils/fontSize";
import { FrequencyList } from "../utils/DropDownOptions";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";
import { EnregistrerButton, EnregistrerContinuerButton, PrecedentButton } from "../utils/Buttons";

const Vehicule2FontSize = MICRO;

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
            {props.textInput ?
                <TypeInput onChange={props.onChange} value={props.value} />
            :
                <SelectInput options={props.options1} />
            }
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
                <DoubleSelect options1={props.options1} options2={props.options2} onChange1={props.onChange1} onChange2={props.onChange2} value1={props.value1} value2={props.value2}/>
            : props.loyer ?
                <DoubleSelect textInput options2={props.options2} onChange1={props.onChange1} onChange2={props.onChange2} value1={props.value1} value2={props.value2}/>
            :
                <TypeInput textInput onChange={props.onChange} value={props.value} />
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

    const [numero, setNumero] = React.useState(null);
    const [duree, setDuree] = React.useState(0);
    const [dateEntree, setDateEntree] = React.useState(null);
    const [dateSortie, setDateSortie] = React.useState(null);
    const [kmContrat, setKmContrat] = React.useState(0);
    const [pneusHIVER, setPneusHIVER] = React.useState(0);
    const [pneusETE, setPneusETE] = React.useState(0);
    const [Loyer, setLoyer] = React.useState(0);
    const [Frequency, setFrequency] = React.useState(0);

    const handleNumeroChange = (event) => { setNumero(event.target.value); };
    const handleDureeChange = (event) => { setDuree(event.target.value); };
    const handleDateEntreeChange = (event) => { setDateEntree(event.target.value); };
    const handleDateSortieChange = (event) => { setDateSortie(event.target.value); };
    const handleKmContratChange = (event) => { setKmContrat(event.target.value); };
    const handlePneusHIVERChange = (event) => { setPneusHIVER(event.target.value); };
    const handlePneusETEChange = (event) => { setPneusETE(event.target.value); };
    const handleLoyerChange = (event) => { setLoyer(event.target.value); };
    const handleFrequencyChange = (event) => { setFrequency(event.target.value); };

    return (
        <Paper elevation={3} style={{ margin: "0", padding: "1rem" }}>
            <VehiculeTileField text={"Numéro de contrat"} value={numero} onChange={handleNumeroChange} />
            <VehiculeTileField text={"Durée (mois)"} value={duree} onChange={handleDureeChange} />
            <VehiculeTileField date text={"Date d'entrée"} value={dateEntree} onChange={handleDateEntreeChange} />
            <VehiculeTileField date text={"Date de sortie"} value={dateSortie} onChange={handleDateSortieChange} />
            <VehiculeTileField text={"Km au contrat"} value={kmContrat} onChange={handleKmContratChange} />
            <VehiculeTileField select text={"Pneus au contrat"} options1={props.vehicule.pneusHIVER} options2={props.vehicule.pneusETE} value1={pneusHIVER} value2={pneusETE} onChange1={handlePneusHIVERChange} onChange2={handlePneusETEChange} />
            <VehiculeTileField loyer text={"Loyer HT"} options2={FrequencyList} value1={Loyer} value2={Frequency} onChange1={handleLoyerChange} onChange2={handleFrequencyChange} />
            <Typography style={{ textAlign: "right", fontSize: Vehicule2FontSize, color: ORANGE, padding: "0.5rem 5rem" }}>
                * Complétez les champs requis
            </Typography>
        </Paper>
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const Vehicule2 = (props) => {
    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12} style={{width: "150%", paddingBottom: "1rem"}}>
                <VehiculeTile vehicule={props.data}/>
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

export default Vehicule2;