import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, TextField, Typography } from "@mui/material";

// CodeNekt imports
import { LITTLE, MICRO } from "../../../utils/fontSize";
import { BLACKCN, GREYBACK } from "../../../utils/colors";

// Local ajouter imports
import CodenektButton from "../../../Components/CodeNektButton";
import { CodeNektCross } from "../../../Components/CodeNektIcons";

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

const Colab1 = (props) => {

    const [id, setId] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("id: ", id);
        if (id == 12345) {
            setError(true);
        } else {
            setError(false);
            props.onComplete();
        }
    };

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
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center"}}
            >
                {error && (
                    <Typography
                        color={"red"}
                        fontSize={MICRO}
                        style={{ textAlign: "center" }}
                    >
                        <CodeNektCross size={MICRO/1.4}/> Attention, l'ID de votre collaborateur n'est pas correct.
                    </Typography>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={12}
                sx={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
            >
                <CodenektButton orange
                    onClick={handleSubmit}
                    title="ENVOYER"
                />
            </Grid>
        </Grid>
    );
};

export default Colab1;