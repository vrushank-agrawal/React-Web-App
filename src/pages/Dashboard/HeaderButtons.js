import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Autocomplete, TextField } from "@mui/material";

// CodeNekt imports
import CodeNektSearch from "../../Components/CodeNektSearch";
import CodenektButton from "../../Components/CodeNektButton";
import { WHITECN } from "../../utils/colors";
import { CodeNektAdd } from "../../Components/CodeNektIcons";
import { LinkAjoutCollab, LinkAjoutVehicule } from "../../Components/CodeNektPageLinks";

const DashboardSearchButton = (props) => {
    return (
        <CodeNektSearch
            label={"Rechercher nom collaborateur par exemple"}
            searchData={props.data}
            width={"100%"}
        />
    );
};

const DashboardHeaderButton = (props) => {
    return (
        <CodenektButton
            blue
            bold
            color={WHITECN}
            height={"fit-content"}
            margin={"auto"}
            padding={"0.1rem 1rem"}
            startIcon={props.startIcon}
            title={props.title}
            to={props.to}
            width={"fit-content"}
        />
    );
};

const HeaderButtons = (props) => {
    const data = [
        { label: "Véhicule 1" },
        { label: "Véhicule 2" },
        { label: "Véhicule 3" },
        { label: "Véhicule 4" },
        { label: "Véhicule 5" },
        { label: "Véhicule 3" },
        { label: "Véhicule 4" },
        { label: "Véhicule 5" },
        { label: "Véhicule 3" },
        { label: "Véhicule 4" },
        { label: "Véhicule 5" },
    ]

    return (
        <Grid item xs={12} sm={12} md={12} sx={{margin: "1rem 0 2rem 0"}}>
            <Grid container spacing={3} direction="row">
                <Grid item xs={12} sm={3} md={3}>
                    <DashboardHeaderButton
                        startIcon={<CodeNektAdd fontSize="small" color="white" />}
                        title={"AJOUTER UN COLLABORATEUR"}
                        to={LinkAjoutCollab}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={2.5}>
                    <DashboardHeaderButton
                        startIcon={<CodeNektAdd fontSize="small" color="white" />}
                        title={"AJOUTER UN VÉHICULE"}
                        to={LinkAjoutVehicule}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={2.5}>
                    <DashboardHeaderButton
                        startIcon={<CodeNektAdd fontSize="small" color="white" />}
                        title={"DECLARER UN SINISTRE"}
                        to={""}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <DashboardSearchButton data={data} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HeaderButtons;