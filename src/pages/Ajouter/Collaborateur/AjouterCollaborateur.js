import React from "react";
import { Paper } from "@mui/material";

// CodeNet imports
import { FONTSEMIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";

import Colab1 from "./Colab1";
import Colab2 from "./Colab2";
import Colab3 from "./Colab3";
import Colab4 from "./Colab4";
import Colab5 from "./Colab5";
import Colab6 from "./Colab6";

const CirclesText = [
    "Recherche du collaborateur",
    "Validation du collaborateur",
    "Fiche collaborateur",
    "Affection du véhicule",
    "Avantages, cartes et badges",
    "Validation de la fiche collaborateur",
];

const ColabPages = 6;

const AjouterCollaborateur = () => {
    const [step, setStep] = React.useState(1);

    const handleStepChange = (step) => {
        setStep(step);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "90%" }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD, margin: "0"}}>
                AJOUTER UN COLLABORATEUR
            </h1>
            <Paper elevation={3}
                style={{
                    height: "35rem",
                    marginTop: "1rem",
                    padding: "1rem",
                    width: "60rem"
                }}
            >
                {step == 1 && <Colab1 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
                {step == 2 && <Colab2 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
                {step == 3 && <Colab3 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
                {step == 4 && <Colab4 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
                {step == 5 && <Colab5 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
                {step == 6 && <Colab6 onComplete={handleStepChange} text={CirclesText[step-1]} circles={ColabPages} />}
            </Paper>
        </div>
    );
}

export default AjouterCollaborateur;