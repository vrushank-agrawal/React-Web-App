import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Paper, TextField, Typography } from "@mui/material";

// CodeNekt imports
import { FONTSEMIBIG, LITTLE, MICRO, MINIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";
import { BLACKCN, GREYBACK, GREYTEXT2, ORANGELIGHT, WHITECN } from "../../../utils/colors";

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
        padding: '0',
        position: 'relative',
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
                sx={{margin: "1rem 0 0.2rem 0"}}
            >
                <Typography
                    color={BLACKCN}
                    fontSize={LITTLE}
                    style={{ textAlign: "center" }}
                >
                    Quel est l'ID CodeNekt de votre collaborateur ?
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center"}}
            >
                <IDInput
                    id="outlined-basic"
                    label=""
                    variant="filled"
                    size="small"
                    style={{ backgroundColor: GREYBACK }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
            >
                <CodenektButton
                    orange
                    onClick={props.onComplete}
                    title="ENVOYER"
                />
            </Grid>
        </Grid>
    );
};

const Colab1 = (props) => {
    console.log(props.text)
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

export default Colab1;