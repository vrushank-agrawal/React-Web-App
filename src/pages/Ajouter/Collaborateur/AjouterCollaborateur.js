import React from "react";

import Colab1 from "./Colab1";
import Colab2 from "./Colab2";
import Colab3 from "./Colab3";
import Colab4 from "./Colab4";
import Colab5 from "./Colab5";
import Colab6 from "./Colab6";
import FinalPage from "../utils/FinalPage";
import MainGrid from "../utils/MainGrid";
import { LinkVoirCollab } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Recherche du collaborateur",
    "Validation du collaborateur",
    "Fiche collaborateur",
    "Affection du véhicule",
    "Avantages, cartes et badges",
    "Validation de la fiche collaborateur",
];

import { VehicleSearchData as ColabData4 } from "../../utils/TCO-test-data";
const CarteData = [ "99991", "99992", "99993", "99994", "99995", ];
const BadgeData = [ "99", "98", "97", "96", ];

const ColabPages = 6;

const AjouterCollaborateur = () => {

    const [step, setStep] = React.useState(5);
    const handleStepChange = (step) => {setStep(step);};
    const onRegister = () => {console.log("Register");};
    const onComplete = () => {handleStepChange(step+1);}
    const onPrevious = () => {handleStepChange(step-1);}

    return (
    <>{
        step == ColabPages+1 ?
        <FinalPage ajouter={"UN COLLABORATEUR"} title={"Fiche véhicule validée"} buttonTitle={"Collaborateur"} to={LinkVoirCollab} />
        :
        <MainGrid
            ajouter={"UN COLLABORATEUR"}
            circles={ColabPages}
            page={step}
            text={CirclesText[step-1]}
            localContent={
                step == 1 ? <Colab1 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 2 ? <Colab2 circles={ColabPages} text={CirclesText[step-1]} />
                : step == 3 ? <Colab3 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} />
                : step == 4 ? <Colab4 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} searchData={ColabData4} />
                : step == 5 ? <Colab5 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} carteData={CarteData} badgeData={BadgeData} />
                : step == 6 ? <Colab6 onComplete={onComplete} onPrevious={onPrevious} />
                : null
            }
        />
    }</>
    );
}

export default AjouterCollaborateur;