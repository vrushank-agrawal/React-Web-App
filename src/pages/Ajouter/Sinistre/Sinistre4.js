import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { BLACKCN, GREYTEXT2, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektFileUploader from "../../../Components/CodeNektFileUploader";
import { Button } from "@mui/material";
import { CodeNektAdd } from "../../../Components/CodeNektIcons";
import { PrecedentButton, EnregistrerButton, EnregistrerContinuerButton } from "../utils/Buttons";

const Sinistre4FontSize = MICRO;
const FormatAcceptes = "Formats acceptés: Jpeg, Jpg et Png. Taille: moins de 10 Mo";

// ---------------------------------------------
// INPUT TYPES
// ---------------------------------------------

const SelectInput = (props) => {
    const [category, setCategory] = React.useState("");
    const handleChange = (event) => {setCategory(event.target.value);};

    return (
        <CodeNektSelect
            fontSize={Sinistre4FontSize}
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
            disabled
            fontSize={Sinistre4FontSize}
            // height={"1rem"}
            margin="0"
            onChange={props.onChange}
            value={props.value}
        />
    );
};

// ---------------------------------------------
// File Tile
// ---------------------------------------------

const FileUploadField = (props) => {
    const [fileName, setFileName] = React.useState('');

    const handleFileUpload = (name) => {
      setFileName(name);
      props.onFileUpload(props.id, name);
    };

    return (
    <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0", display: "flex", alignItems: "center"}}>
        <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Sinistre4FontSize }}>
                FICHIER
            </Typography>
        </Grid>
        <Grid item xs={12} sm={7} md={7} style={{paddingLeft: "1.5rem"}}>
            <TypeInput onChange={props.onChange} value={fileName} disabled={true} />
        </Grid>
        <Grid item xs={12} sm={3} md={3} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CodeNektFileUploader onFileUpload={handleFileUpload} />
        </Grid>
    </Grid>
    );
};

const FileTile = (props) => {

    const [fileUploadFields, setfileUploadFields] = React.useState([<FileUploadField text={"FICHIER"} key={0} />]);

    const handleFileUpload = (id, name) => {
        console.log(name);
        const updatedFields = fileUploadFields.map((field, index) => {
            if (index === id) {
                return { ...field, fileName: name };
            }
            return field;
        });
        setfileUploadFields(updatedFields);
    };

    const addFileUploadField = (photo) => {
        const newFileField = {id: fileUploadFields.length};
        setfileUploadFields([...fileUploadFields, newFileField]);
    };

    return (
        <Paper elevation={3} style={{ marginTop: "0.5rem", padding: "1rem" }}>
            <Grid container direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container direction={"row"} style={{ display: "flex", alignItems: "center" }}>
                        <Grid item xs={12} sm={2} md={2}>
                            <Typography style={{ textAlign: "left", fontSize: MINIBIG }}>
                                PHOTOS
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography style={{ textAlign: "left", fontSize: Sinistre4FontSize, color: ORANGE }}>
                                {FormatAcceptes}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {fileUploadFields.map((fileUploadField) => (
                    <FileUploadField
                        id={fileUploadField.id}
                        key={fileUploadField.id}
                        onChange={handleFileUpload}
                        onFileUpload={handleFileUpload}
                    />
                ))}
                <Button variant="standard" color={BLACKCN}
                    onClick={addFileUploadField}
                    startIcon={<CodeNektAdd size={12} />}
                >
                    Ajouter un document
                </Button>
            </Grid>
        </Paper>
    );
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------

const Sinistre4 = (props) => {
    return (
        <Grid container direction={"column"} style={{padding: "0 10rem"}}>
            <Grid item xs={12} sm={12} md={12}>
                <FileTile />
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

export default Sinistre4;