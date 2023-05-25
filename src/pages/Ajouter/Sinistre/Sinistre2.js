import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

// CodeNekt imports
import CodeNektSearch from "../../../Components/CodeNektSearch";
import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2, GREYBACK, ORANGE, ORANGEDARK, ORANGELIGHT } from "../../../utils/colors";
import { LITTLE, LITTLE2, MINIBIG } from "../../../utils/fontSize";
import { TCOVehicles as SinistreData } from "../../utils/TCO-test-data";
import CodenektButton from "../../../Components/CodeNektButton";
import AjouterPagesInput from "../../../Components/CodeNektInput";

const LocalContent = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>

            {/* ------------------ Search Vehicle ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={BLACKCN} fontSize={MINIBIG} style={{margin: "auto"}}>
                    Rechercher du véhicule
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{width: "40%", margin: "auto"}}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Grid item xs={11} sm={11} md={11}>
                        <CodeNektSearch
                            label={"Véhicule"}
                            searchData={props.searchData}
                            width={"100%"}
                        />
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Typography style={{color: ORANGE, fontSize: MINIBIG}}> * </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------ Choose Date ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{padding: "2rem 20rem 0 20rem"}}>
                <Grid container spacing={1.5} direction={"row"} style={{display: "flex", alignItems: "center"}}>
                    <Grid item xs={6} sm={4} md={4}>
                        <Typography color={BLACKCN} fontSize={LITTLE2} style={{margin: "auto"}}>
                            COLLABORATEUR
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={8} md={8}>
                        <TextField
                            disabled={true}
                            value={"Remplissage automatique"}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------ Button ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={ORANGE} fontSize={LITTLE} style={{margin: "1rem auto auto auto"}}>
                    * Complétez les champs obligatoires
                </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <CodenektButton
                    bold
                    gradient
                    dir={"to right"}
                    left={ORANGEDARK}
                    right={ORANGELIGHT}
                    onClick={props.onComplete}
                    title="AFFECTER LE VÉHICULE"
                />
            </Grid>
        </Grid>
    );
};

const Sinistre2 = (props) => {

    const VehicleData = SinistreData.map((item) => ({
        label: `${item.immat} ${item.marque} ${item.modele}`,
    }));

    const onComplete = () => {
        props.onComplete(3);
    }

    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={2}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{marginBottom: "1rem"}}>
                <Typography
                    color={GREYTEXT2}
                    fontSize={MINIBIG}
                    style={{ textAlign: "center" }}
                >
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <LocalContent
                    searchData={VehicleData}
                    onComplete={onComplete}
                />
            </Grid>
        </Grid>
    );
};

export default Sinistre2;