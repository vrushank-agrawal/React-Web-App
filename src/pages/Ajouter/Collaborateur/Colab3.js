import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Divider, MenuItem, Select } from "@mui/material";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, ORANGE, WHITECN } from "../../../utils/colors";
import { MICRO, MINIBIG } from "../../../utils/fontSize";
import { categories } from "../../utils/CategorieDefinition";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import { CodeNektEye } from "../../../Components/CodeNektIcons";

const Colab3FontSize = MICRO;

const CategoryInput = (props) => {
    const [category, setCategory] = React.useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <CodeNektSelect
            fontSize={Colab3FontSize}
            margin="0"
            onChange={handleChange}
            options={categories}
            value={category}
        />
    );
};

const CollaborateurTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0"}}>
            <Grid item xs={12} sm={2} md={2} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: Colab3FontSize }}>
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={10} style={{paddingLeft: "1.5rem"}}>
                {props.category ?
                    <CategoryInput />
                :
                    <Typography color={GREYTEXT2} style={{ textAlign: "left" , fontSize: Colab3FontSize}} >
                        {props.text}
                    </Typography>
                }
            </Grid>
        </Grid>
    );
};

const CollaborateurTile = (props) => {
    return (
        <Paper elevation={1} style={{ padding: "2rem" }}>
            <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                        COLLABORATEUR
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <CollaborateurTileField text={"ID Codenekt"} value={props.id} />
                    <CollaborateurTileField text={"Nom"} value={props.nom} />
                    <CollaborateurTileField text={"Prénom"} value={props.prenom} />
                    <CollaborateurTileField text={"Email"} value={props.email} />
                    <CollaborateurTileField category text={"Catégorie"} value={props.categorie} />
                </Grid>
            </Grid>
        </Paper>
    );
};

const ViewDocument = (props) => {
    return (
        <CodeNektEye size={18} />
    );
};

const RappelButton = (props) => {
    return (
        <CodenektButton
            blue
            color={WHITECN}
            onClick={props.onClick}
            title="ENVOYER UN RAPPEL A VOTRE COLLABORATEUR"
            width={"100%"}
        />
    );
};

const DocumentsTileField = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"} style={{margin: "0.5rem 0"}}>
            <Grid item xs={12} sm={8} md={8}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: (1.5)*Colab3FontSize }}>
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{paddingRight: "0.2rem", display: "flex", justifyContent: "right"}}>
                {props.isDocumentUploaded ? (
                    <ViewDocument />
                ) : (
                    <Typography style={{ color: ORANGE, textAlign: "right" , fontSize: Colab3FontSize}} >
                        Document<br/> Manquant
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

const DocumentsTile = (props) => {
    return (
        <Paper elevation={1} style={{ padding: "2rem" }}>
            <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography color={BLACKCN} style={{ textAlign: "left", fontSize: MINIBIG, fontWeight: "bold" }}>
                        DOCUMENTS
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <DocumentsTileField text={"Carte d'identité"} isDocumentUploaded={true} />
                    <Divider style={{ backgroundColor: ORANGE, }} />
                    <DocumentsTileField text={"Permis"} isDocumentUploaded={props.isDocumentUploaded} />
                </Grid>
                {!props.isDocumentUploaded &&
                <Grid item xs={12} sm={12} md={12} >
                    <RappelButton onClick={props.onClick} />
                </Grid>}
            </Grid>
        </Paper>
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
            width={"90%"}
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
            width={"90%"}
        />
    );
};

const Colab3 = (props) => {
    return (
        <Grid container spacing={3} direction={"row"} style={{padding: "0 5rem"}}>
            <Grid item xs={12} sm={7} md={7}>
                <CollaborateurTile />
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
                <Grid container spacing={1.5} direction={"column"}>
                    <Grid item xs={12} sm={12} md={12}>
                        <DocumentsTile />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{marginTop: "1rem"}}>
                        <Grid container spacing={1.5} direction={"row"}>
                            <Grid item xs={12} sm={5} md={5}>
                                <EnregistrerButton onClick={props.onRegister} />
                            </Grid>
                            <Grid item xs={12} sm={7} md={7}>
                                <EnregistrerContinuerButton onClick={props.onComplete} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};


// const Colab3 = (props) => {

//     const onRegister = () => {
//         console.log("Colab3");
//     }

//     const onComplete = () => {
//         props.onComplete(4);
//     }

//     return (
//         <Grid container spacing={1.5} direction={"column"}>
//             <Grid item xs={12} sm={12} md={12}>
//                 <DisplayHeader
//                     text={props.text}
//                     circles={props.circles}
//                     page={3}
//                 />
//             </Grid>
//             <Grid item xs={12} sm={12} md={12} style={{marginBottom: "1rem"}}>
//                 <Typography
//                     color={GREYTEXT2}
//                     fontSize={MINIBIG}
//                     style={{ textAlign: "center" }}
//                 >
//                     {props.text.toLocaleUpperCase()}
//                 </Typography>
//             </Grid>
//             <Grid item xs={12} sm={12} md={12}>
//                 <LocalContent onComplete={onComplete} onRegister={onRegister} />
//             </Grid>
//         </Grid>
//     );
// }

export default Colab3;