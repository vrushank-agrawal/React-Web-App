import React from "react";
import { Paper } from "@mui/material";

// CodeNet imports
import { FONTSEMIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";

import Carte1 from "./Carte1";
import Carte2 from "./Carte2";
import { LinkVoirCarte } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Création de la carte ou du badge",
    "Validation"
];

const CartesPages = 2;

const AjouterSinistre = () => {

    const [step, setStep] = React.useState(1);

    const handleStepChange = (step) => {
        setStep(step);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "100%", alignItems: "center" }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD, margin: "0", marginRight: "auto" }}>
                AJOUTER UNE CARTE OU UN BADGE
            </h1>
            <Paper elevation={3}
                style={{
                    height: "37rem",
                    marginTop: "1rem",
                    padding: "1rem",
                    width: "70rem"
                }}
            >
                {step == 1 && <Carte1 onComplete={handleStepChange} text={CirclesText[step-1]} circles={CartesPages} />}
                {step == 2 && <Carte2 text={CirclesText[step-1]} circles={CartesPages}
                                title={"Badge créé"} buttonTitle={"BADGE"} to={LinkVoirCarte} />}
            </Paper>
        </div>
    );
}

export default AjouterSinistre;