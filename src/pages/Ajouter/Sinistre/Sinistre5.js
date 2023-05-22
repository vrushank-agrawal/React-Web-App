import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektFileUploader from "../../../Components/CodeNektFileUploader";

const Sinistre5FontSize = MICRO;
const FormatAcceptes = "Formats acceptés: Jpeg, Jpg et Png. Taille: moins de 10 Mo";

const TypeInput = (props) => {
    return (
        <CodeNektInput
            fontSize={Sinistre5FontSize}
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
            <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Sinistre5FontSize }}>
                FICHIER
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
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Sinistre5FontSize }}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{paddingLeft: "1.5rem"}}>
                <TypeInput onChange={props.onChange} value={props.value} />
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
                                DOCUMENTS
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography style={{ textAlign: "left", fontSize: Sinistre5FontSize, color: ORANGE }}>
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
            </Grid>
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
                <FileTile title={"Contrat"} />
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


const Sinistre5 = (props) => {

    const onRegister = () => {
        console.log("Sinistre5");
    }

    const onComplete = () => {
        props.onComplete(6);
    }

    const onPrevious = () => {
        props.onComplete(4);
    }

    return (
        <Grid container direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={5}
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

export default Sinistre5;