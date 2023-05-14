import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Paper, TextField, Typography } from "@mui/material";

// CodeNekt imports
import { FONTSEMIBIG, LITTLE, MICRO, MINIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";
import { BLACKCN, GREYBACK, GREYTEXT2, ORANGELIGHT, WHITECN } from "../../../utils/colors";

// Local ajouter imports
import { CirclesText } from "./HeaderCircleText";
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
        <Grid container spacing={1.5} direction={"column"}
            sx={{margin: "1rem 0 10rem 0"}}
        >
            <Grid item xs={12} sm={12} md={12}>
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
                sx={{display: "flex", justifyContent: "center"}}
            >
                <CodenektButton
                    orange
                    title="ENVOYER"
                />
            </Grid>
        </Grid>
    );
};

const Colab1 = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "90%" }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD, margin: "0"}}>
                AJOUTER UN COLLABORATEUR
            </h1>
            <Paper elevation={3}
                style={{
                    padding: "1rem",
                    marginTop: "1rem",
                    width: "60rem"
                }}
            >
                <Grid container spacing={1.5} direction={"column"}>
                    <Grid item xs={12} sm={12} md={12}>
                        <DisplayHeader CirclesText={CirclesText} page={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography
                            color={GREYTEXT2}
                            fontSize={MINIBIG}
                            style={{ textAlign: "center" }}
                        >
                            {CirclesText.find((circle) => circle.number == 1).text.toLocaleUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <LocalContent />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Colab1;