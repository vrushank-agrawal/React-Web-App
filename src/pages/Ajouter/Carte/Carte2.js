import React from "react";
import { Grid } from "@mui/material";
import CodeNektButton from "../../../Components/CodeNektButton";
import { ORANGE, WHITECN } from "../../../utils/colors";
import { CodeNektEye, CodeNektLeft } from "../../../Components/CodeNektIcons";
import { LinkDashboard } from "../../../Components/CodeNektPageLinks";

const Carte2 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>
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
    );
}

export default Carte2;