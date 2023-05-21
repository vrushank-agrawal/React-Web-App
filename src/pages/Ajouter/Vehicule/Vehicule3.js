import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektFileUploader from "../../../Components/CodeNektFileUploader";

const Vehicule3FontSize = MICRO;
const FormatAcceptes = "Formats acceptés: Jpeg, Jpg et Png. Taille: moins de 10 Mo";

const FileData = {
    contrat: {
        name: "",
    },
    carteGrise: {
        numero: "",
        name: "",
    },
    carteAssurance: {
        numero: "",
        name: "",
        montant: "",
        montantFreq: "",
        options: [
            {
                label: "Mensuel",
                value: 1,
            },
            {
                label: "Annuel",
                value: 2,
            },
        ],
    },
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
            fontSize={Vehicule3FontSize}
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
            fontSize={Vehicule3FontSize}
            // height={"1rem"}
            margin="0"
            onChange={props.onChange}
            value={props.value}
        />
    );
};

// ---------------------------------------------
// Vehicle Tile
// ---------------------------------------------

const FileUploadField = (props) => {
    const [fileName, setFileName] = React.useState('');

    const handleFileUpload = (name) => {
      setFileName(name);
    };

    return (
    <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
        <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule3FontSize }}>
                {props.text}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={7} md={7} style={{paddingLeft: "1.5rem"}}>
            <TypeInput onChange={props.onChange} value={fileName} />
        </Grid>
        <Grid item xs={12} sm={3} md={3} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CodeNektFileUploader onFileUpload={handleFileUpload} />
        </Grid>
    </Grid>
    );
};

const NumeroField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule3FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
                <TypeInput onChange={props.onChange} value={props.value} />
            </Grid>
        </Grid>
    );
};

const CoutSelectField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule3FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={5} style={{paddingLeft: "1.5rem"}}>
                <TypeInput onChange={props.onChange} value={props.value} />
            </Grid>
            <Grid item xs={12} sm={1} md={1} style={{paddingLeft: "1.5rem"}}></Grid>
            <Grid item xs={12} sm={3} md={3} style={{paddingLeft: "1.5rem"}}>
                <SelectInput options={props.options} />
            </Grid>
        </Grid>
    );
};

const FileTile = (props) => {
    return (
        <Paper elevation={3} style={{ marginTop: "0.5rem", padding: "1rem" }}>
            <Grid container direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container direction={"row"} style={{ display: "flex", alignItems: "center" }}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography style={{ textAlign: "left", fontSize: MINIBIG }}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography style={{ textAlign: "left", fontSize: Vehicule3FontSize, color: ORANGE }}>
                                {FormatAcceptes}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FileUploadField text={"FICHIER"} />
                </Grid>
                {props.numero &&
                <Grid item xs={12} sm={12} md={12}>
                    <NumeroField text={"NUMERO"} onChange={props.onChangeNumero} value={props.file.numero} />
                </Grid>
                }
                {props.cout &&
                <Grid item xs={12} sm={12} md={12}>
                    <CoutSelectField text={"COUT"} onChange={props.onChangeCout} value={props.file.cout} options={props.file.options} />
                </Grid>
                }
            </Grid>
        </Paper>
    );
};

// ---------------------------------------------
// BUTTONS
// ---------------------------------------------

const PrecedentButton = (props) => {
    return (
        <CodenektButton
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
    console.log(props.file.carteGrise);
    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <FileTile title={"Contrat"} file={props.file.contrat} />
                <FileTile title={"Carte grise"} file={props.file.carteGrise} numero />
                <FileTile title={"Carte Assurance"} file={props.file.carteAssurance} numero cout />
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


const Vehicule3 = (props) => {

    const onRegister = () => {
        console.log("Vehicule3");
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
                <LocalContent onComplete={onComplete} onRegister={onRegister} onPrevious={onPrevious} file={FileData}/>
            </Grid>
        </Grid>
    );
}

export default Vehicule3;