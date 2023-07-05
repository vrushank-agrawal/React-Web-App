import React from "react";

import Sinistre1 from "./Sinistre1";
import Sinistre2 from "./Sinistre2";
import Sinistre3 from "./Sinistre3";
import Sinistre4 from "./Sinistre4";
import Sinistre5 from "./Sinistre5";
import Sinistre6 from "./Sinistre6";
import FinalPage from "../utils/FinalPage";
import MainGrid from "../utils/MainGrid";
import { LinkVoirSinistre } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Intitulé du sinistre",
    "Recherche du véhicule",
    "Détails du sinistre",
    "Ajout des photos",
    "Ajout des documents",
    "Validation"
];

import { VehicleSearchData as SinistreData2 } from "../../utils/TCO-test-data";
const SinistreData6 = {
    sinistre: {
        nom: "Sinistre 6",
        date: "01/01/2021",
        vehicule: "AB-123-CD",
        collaborateur: "DUPONT Jean",
    },
    detail: "Détail du véhicule very very very long ",
    docs: {
        constat: "N. 12345",
        procesVerbal: "N. 12345",
    },
    photos: [
        "PIC0101",
        "PIC0102",
        "PIC0103",
        "PIC0104",
    ],
};

const SinistrePages = 6;

const AjouterSinistre = () => {

    const [step, setStep] = React.useState(3);
    const handleStepChange = (step) => {setStep(step);};
    const onRegister = () => {console.log("Register");};
    const onComplete = () => {handleStepChange(step+1);}
    const onPrevious = () => {handleStepChange(step-1);}

    return (
    <>{
        step == SinistrePages+1 ?
        <FinalPage ajouter={"UN SINISTRE"} title={"Sinistre créé"} buttonTitle={"SINISTRE"} to={LinkVoirSinistre} />
        :
        <MainGrid
            ajouter={"UN SINISTRE"}
            circles={SinistrePages}
            page={step}
            text={CirclesText[step-1]}
            localContent={
                step == 1 ? <Sinistre1 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 2 ? <Sinistre2 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} searchData={SinistreData2} />
                : step == 3 ? <Sinistre3 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 4 ? <Sinistre4 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 5 ? <Sinistre5 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 6 ? <Sinistre6 onComplete={onComplete} onPrevious={onPrevious} data={SinistreData6} />
                : null
            }
        />
    }</>
    );
}

export default AjouterSinistre;