import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import CodeNektButton from "../../../Components/CodeNektButton";
import { ORANGE, WHITECN } from "../../../utils/colors";
import { MINIBIG } from "../../../utils/fontSize";
import { CodeNektEye, CodeNektLeft } from "../../../Components/CodeNektIcons";
import { LinkDashboard } from "../../../Components/CodeNektPageLinks";
import DisplayHeader from "../utils/DisplayHeader";

const Carte2 = (props) => {
    return (
    <Paper elevation={0}
        style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
        }}
    >
        <Grid container xs={12} sm={12} md={12} style={{textAlign: "center"}}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={2}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" fontSize={MINIBIG} style={{marginBottom: "1rem"}}>
                    {props.title}
                </Typography>
                <Grid container spacing={1.5} direction={"column"} style={{textAlign: "center", alignItems: "top"}}>
                    <CodeNektButton blue bold
                        color={WHITECN}
                        onClick={props.onClick}
                        padding={"1rem"}
                        startIcon={<CodeNektEye size={15} />}
                        title={"Voir le "+ props.buttonTitle}
                        to={props.to}
                        width={"20%"}
                    />
                    <CodeNektButton white
                        border={"1px solid" + ORANGE}
                        color={ORANGE}
                        padding={"1rem"}
                        startIcon={<CodeNektLeft size={15} />}
                        title={"Retour au Tableau de bord"}
                        to={LinkDashboard}
                        width={"20%"}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}> </Grid>
        </Grid>
    </Paper>
    );
}

export default Carte2;