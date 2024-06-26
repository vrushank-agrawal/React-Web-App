import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { GREYTEXT2, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import { FrequencyList } from "../utils/DropDownOptions";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektFileUploader, {validateFile} from "../../../Components/CodeNektFileUploader";
import { EnregistrerButton, EnregistrerContinuerButton, PrecedentButton } from "../utils/Buttons";
import { FormatAcceptes } from "../../../Components/CodeNektFileUploader";

const Vehicule3FontSize = MICRO;

// ---------------------------------------------
// INPUT TYPES
// ---------------------------------------------

const SelectInput = (props) => {
    const [category, setCategory] = React.useState("");
    const handleChange = (e) => {setCategory(e.target.value);};

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
        <CodeNektInput disabled
            fontSize={Vehicule3FontSize}
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
    return (
    <Grid container direction={"row"} style={{display: "flex", alignItems: "center"}}>
        <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Vehicule3FontSize }}>
                {props.text}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={7} md={7} style={{paddingLeft: "1.5rem"}}>
            <TypeInput onChange={props.onChange} value={props.fileName} />
        </Grid>
        <Grid item xs={12} sm={3} md={3} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CodeNektFileUploader handleFileChange={props.handleFileChange} />
        </Grid>
    </Grid>
    );
};

const NumeroField = (props) => {
    return (
        <Grid container direction={"row"} style={{display: "flex", alignItems: "center"}}>
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
        <Grid container direction={"row"} style={{display: "flex", alignItems: "center"}}>
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
        <Paper elevation={3} style={{ marginTop: "0.5rem", padding: "0.5rem" }}>
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
                    <FileUploadField text={"FICHIER"} fileName={props.fileName} handleFileChange={props.handleFileChange} />
                </Grid>
                {props.numero &&
                <Grid item xs={12} sm={12} md={12}>
                    <NumeroField text={"NUMERO"} onChange={props.onChangeNumero} value={props.file.numero} />
                </Grid>
                }
                {props.cout &&
                <Grid item xs={12} sm={12} md={12}>
                    <CoutSelectField text={"COUT"} onChange={props.onChangeCout} value={props.file.cout} options={FrequencyList} />
                </Grid>
                }
            </Grid>
        </Paper>
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const Vehicule3 = (props) => {
    const [fileName, setFileName] = React.useState([null, null, null]);

    const handleFileChange = (index) => (event) => {
        const file = event.target.files[0];
        console.log(fileName);
        console.log(index);
        if (file && validateFile(file)) {
            setFileName((prevState) => {
                let newState = [...prevState];
                newState[index] = file.name;
                console.log(newState);
                return newState;
            });
            handleFileUpload(file.name)
        } else {
            setFileName((prevState) => {
                let newState = [...prevState];
                newState[index] = null;
                console.log(newState);
                return newState;
            });
        }
    };

    const handleFileUpload = (name) => {};

    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <FileTile handleFileChange={handleFileChange(0)}
                    fileName={fileName[0]} title={"Contrat"} file={props.file.contrat} />
                <FileTile handleFileChange={handleFileChange(1)}
                    fileName={fileName[1]} title={"Carte grise"} file={props.file.carteGrise} numero />
                <FileTile handleFileChange={handleFileChange(2)}
                    fileName={fileName[2]} title={"Carte Assurance"} file={props.file.carteAssurance} numero cout />
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

export default Vehicule3;