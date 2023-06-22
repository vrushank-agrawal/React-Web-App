import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, Grid, Paper, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import { categories } from "../../utils/CategorieDefinition";
import { Boite, Carburant, Statut } from "../utils/DropDownOptions";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";

import { getBrands, getModels } from "../../../api/modules/Vehicle";

const Vehicule1FontSize = MICRO;

const VehiculeData = {
    id: "12345",
    marque: "Renault",
    modele: "Clio",
    version: "AB-123-CD",
    boite: "Manuelle",
    carburant: "Essence",
    statut: "En service",
};

// ---------------------------------------------
// INPUT TYPES
// ---------------------------------------------

const SelectInput = (props) => {
    return (
        <CodeNektSelect
            fontSize={Vehicule1FontSize}
            height={"1rem"}
            margin="0"
            onChange={props.onChange}
            options={props.options}
            value={props.value}
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
            <Grid item xs={12} sm={9} md={9} style={{display: "flex", paddingLeft: "1.5rem", alignItems: "center"}}>
            {props.select ? <SelectInput options={props.options} onChange={props.onChange} value={props.value} />
            : props.input ? <TypeInput onChange={props.onChange} value={props.value} />
            : props.date ? <DateInput onChange={props.onChange} value={props.value}/>
            :   <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Vehicule1FontSize}} >
                    {props.value ?? "12345"}
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

    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const processBrands = async () => {
        try {
            const response = await getBrands(user.token);
            if (response.status === 200) {
                const brands = response.data;
                const mappedBrands = brands.map(({ id, name, type }) => {
                    return { value: id, label: name };
                });
                dispatch({ type: "GET_BRANDS", data: mappedBrands });
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    useEffect(() => {
        processBrands();
      }, []);

    const brands = useSelector((state) => state.brandsReducer.brands);

    const getModelNames = async (brand) => {
        try {
            const response = await getModels(brand, user.token);
            if (response.status === 200) {
                const models = response.data;
                const mappedModels = models.map(({ id, name, brand }) => {
                    return { value: id, label: name };
                });
                dispatch({ type: "GET_MODELS", data: mappedModels });
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const models = useSelector((state) => state.brandsReducer.models);

    const [marque, setMarque] = React.useState('');
    const [modele, setModele] = React.useState('');
    const [version, setVersion] = React.useState(null);
    const [boite, setBoite] = React.useState('');
    const [puissance, setPuissance] = React.useState(null);
    const [carburant, setCarburant] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [statut, setStatut] = React.useState('');

    const handleMarqueChange = (event) => {
        setMarque(event.target.value);
        getModelNames(event.target.value);
    };
    const handleModeleChange = (event) => {setModele(event.target.value);};
    const handleVersionChange = (event) => {setVersion(event.target.value);};
    const handleBoiteChange = (event) => {setBoite(event.target.value);};
    const handlePuissanceChange = (event) => {setPuissance(event.target.value);};
    const handleCarburantChange = (event) => {setCarburant(event.target.value);};
    const handleDateChange = (date) => {setSelectedDate(date);};
    const handleStatutChange = (event) => {setStatut(event.target.value);};

    console.log(marque);

    return (
        <Paper elevation={3} style={{ margin: "0", padding: "1rem" }}>
            <VehiculeTileField text={"ID Codenekt"} value={props.vehicule.id} />
            <VehiculeTileField select text={"Marque"} value={marque} options={brands} onChange={handleMarqueChange} />
            <VehiculeTileField select text={"Modèle"} value={modele} options={models} onChange={handleModeleChange} />
            <VehiculeTileField input text={"Version"} value={version}  onChange={handleVersionChange} />
            <VehiculeTileField select text={"Boite"} value={boite} options={Boite} onChange={handleBoiteChange} />
            <VehiculeTileField input text={"Puissance Fiscale"} value={puissance} onChange={handlePuissanceChange} />
            <VehiculeTileField select text={"Carburant"} value={carburant} options={Carburant} onChange={handleCarburantChange} />
            <VehiculeTileField date text={"Mise en circulation"} value={selectedDate} onChange={handleDateChange} />
            <VehiculeTileField select text={"Statut"} value={statut} options={Statut} onChange={handleStatutChange} />
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
            <Grid item xs={12} sm={12} md={12} style={{width: "150%", paddingBottom: "1rem"}}>
                <VehiculeTile vehicule={props.vehicule}/>
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
                <LocalContent onComplete={onComplete} onRegister={onRegister} vehicule={VehiculeData} />
            </Grid>
        </Grid>
    );
}

export default Vehicule1;