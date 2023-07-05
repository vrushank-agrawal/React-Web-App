import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { GREYTEXT2, ORANGE } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import CodeNektInput from "../../../Components/CodeNektInput";
import CodeNektFileUploader from "../../../Components/CodeNektFileUploader";
import { PrecedentButton, EnregistrerButton, EnregistrerContinuerButton } from "../utils/Buttons";

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
// Main Component
// ---------------------------------------------

const Sinistre5 = (props) => {
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

export default Sinistre5;