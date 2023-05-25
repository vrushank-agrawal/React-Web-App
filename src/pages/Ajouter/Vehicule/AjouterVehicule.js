import React from "react";
import { Paper } from "@mui/material";

// CodeNet imports
import { FONTSEMIBIG } from "../../../utils/fontSize";
import { FONTBOLD } from "../../../utils/fonts";

import Vehicule1 from "./Vehicule1";
import Vehicule2 from "./Vehicule2";
import Vehicule3 from "./Vehicule3";
import Vehicule4 from "./Vehicule4";
import Vehicule5 from "./Vehicule5";
import FinalPage from "../utils/FinalPage";
import { LinkVoirVehicule } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Création de la fiche véhicule",
    "Contrat du véhicule",
    "Ajout de documents",
    "Affection du collaborateur",
    "Validation de la fiche véhicule",
];

const VehiculePages = 5;

const AjouterVehicule = () => {

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
                {step == 1 && <Vehicule1 onComplete={handleStepChange} text={CirclesText[step-1]} circles={VehiculePages} />}
                {step == 2 && <Vehicule2 onComplete={handleStepChange} text={CirclesText[step-1]} circles={VehiculePages} />}
                {step == 3 && <Vehicule3 onComplete={handleStepChange} text={CirclesText[step-1]} circles={VehiculePages} />}
                {step == 4 && <Vehicule4 onComplete={handleStepChange} text={CirclesText[step-1]} circles={VehiculePages} />}
                {step == 5 && <Vehicule5 onComplete={handleStepChange} text={CirclesText[step-1]} circles={VehiculePages} />}
                {step == 6 && <FinalPage title={"Fiche véhicule validée"} buttonTitle={"VÉHICULE"} to={LinkVoirVehicule} />}
            </Paper>
        </div>
    );
}

export default AjouterVehicule;