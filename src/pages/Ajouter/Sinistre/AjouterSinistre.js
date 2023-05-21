import React from "react";
import { Paper } from "@mui/material";

// CodeNet imports
import { FONTSEMIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";

import Sinistre1 from "./Sinistre1";
import Sinistre2 from "./Sinistre2";
import Sinistre3 from "./Sinistre3";
import Sinistre4 from "./Sinistre4";
import Sinistre5 from "./Sinistre5";
import Sinistre6 from "./Sinistre6";
import FinalPage from "../utils/FinalPage";
import { LinkVoirSinistre } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Intitulé du sinistre",
    "Recherche du véhicule",
    "Détails du sinistre",
    "Ajout des photos",
    "Ajout des documents",
    "Validation"
];

const SinistrePages = 6;

const AjouterSinistre = () => {

    const [step, setStep] = React.useState(1);

    const handleStepChange = (step) => {
        setStep(step);
    };

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
                {step == 1 && <Sinistre1 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 2 && <Sinistre2 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 3 && <Sinistre3 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 4 && <Sinistre4 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 5 && <Sinistre5 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 6 && <Sinistre5 onComplete={handleStepChange} text={CirclesText[step-1]} circles={SinistrePages} />}
                {step == 7 && <FinalPage title={"Sinistre créé"} buttonTitle={"SINISTRE"} to={LinkVoirSinistre} />}
            </Paper>
        </div>
    );
}

export default AjouterSinistre;