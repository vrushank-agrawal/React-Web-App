import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

// local imports
import CodeNektButton from "../../../Components/CodeNektButton";
import { ORANGE, WHITECN } from "../../../utils/colors";
import { FONTBOLD } from "../../../utils/fonts";
import { FONTSEMIBIG, MINIBIG } from "../../../utils/fontSize";
import { CodeNektEye, CodeNektLeft } from "../../../Components/CodeNektIcons";
import { LinkDashboard } from "../../../Components/CodeNektPageLinks";

const FinalPage = (props) => {
    return (
<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "100%", alignItems: "center" }}>
    <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD, margin: "0", marginRight: "auto" }}>
        AJOUTER UN VÉHICULE
    </h1>
    <Paper elevation={3}
        style={{
            height: "37rem",
            marginTop: "1rem",
            padding: "1rem",
            width: "70rem"
        }}
    >
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
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "auto", marginBottom: "1rem"}}>
                    <Typography variant="h6" fontSize={MINIBIG}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5} direction={"column"} style={{textAlign: "center"}}>
                        <Grid item xs={12} sm={12} md={12}>
                            <CodeNektButton blue bold
                                color={WHITECN}
                                onClick={props.onClick}
                                padding={"1rem"}
                                startIcon={<CodeNektEye size={15} />}
                                title={"Voir le "+ props.buttonTitle}
                                to={props.to}
                                width={"20%"}
                            />
                        <Grid item xs={12} sm={12} md={12}>
                        </Grid>
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
                </Grid>
            </Grid>
        </Paper>
    </Paper>
</div>
    );
}

export default FinalPage;