import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from '@mui/icons-material/Add';

// CodeNekt imports
import CodenektButton from "../../Components/CodeNektButton";
import { GREYBACK, WHITECN } from "../../utils/colors";
import { LITTLE, MICROPLUS } from "../../utils/fontSize";
import { FormControl } from "@mui/base";

const SearchInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        alignItems: 'center',
        backgroundColor: GREYBACK,
        borderRadius: 50,
        border: 'none',
        fontSize: LITTLE,
        height: '0',
        padding: '0',
        position: 'relative',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        width: 'auto',
    },
}));

const DashboardSearchButton = (props) => {
    return (
    <>
        <Autocomplete
            disablePortal
            options={props.data ?? []}
            renderInput={(params) => (
                <FormControl variant="standard">
                    <SearchInput
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: ( <InputAdornment position="end"> <SearchIcon /> </InputAdornment> ),
                            type: 'search',
                        }}
                        placeholder="Rechercher nom collaborateur par exemple"
                    />
                </FormControl>
            )}
            sx={{
                backgroundColor: GREYBACK,
                border: "none",
                borderRadius: 50,
                fontSize: MICROPLUS,
                margin: "auto",
                width: "100%",
            }}
        />
    </>
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
                        startIcon={<AddIcon fontSize="small" color="white" />}
                        title={"AJOUTER UN COLLABORATEUR"}
                        to={"./ajoutColab"}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={2.5}>
                    <DashboardHeaderButton
                        startIcon={<AddIcon fontSize="small" color="white" />}
                        title={"AJOUTER UN VÉHICULE"}
                        to={""}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={2.5}>
                    <DashboardHeaderButton
                        startIcon={<AddIcon fontSize="small" color="white" />}
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