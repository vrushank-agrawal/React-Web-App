import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, TextField, Typography } from "@mui/material";

// CodeNekt imports
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import { GREYBACK, GREYTEXT2 } from "../../../utils/colors";

// Local ajouter imports
import DisplayHeader from "../utils/DisplayHeader";
import CodenektButton from "../../../Components/CodeNektButton";

const IDInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        alignItems: 'center',
        backgroundColor: GREYBACK,
        borderRadius: 2,
        border: 'none',
        fontSize: LITTLE,
        height: '1.5rem',
        label: 'Intitulé du sinistre',
        padding: '0.1rem 0.5rem',
        position: 'relative',
        placeholder: 'Intitulé du sinistre',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        width: '16rem',
    },
}));

const LocalContent = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"} >
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center", marginTop: "3rem"}}
            >
                <IDInput id="outlined-basic"
                    value={"Intitulé du sinistre"}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
            >
                <CodenektButton orange
                    onClick={props.onComplete}
                    title="créer le sinistre"
                />
            </Grid>
        </Grid>
    );
};

const Sinistre1 = (props) => {

    const onComplete = () => {
        props.onComplete(2);
    };

    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={1}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
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
                    onComplete={onComplete}
                />
            </Grid>
        </Grid>
    );
};

export default Sinistre1;