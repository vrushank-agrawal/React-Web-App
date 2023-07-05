import React from "react";

import Carte1 from "./Carte1";
import Carte2 from "./Carte2";
import MainGrid from "../utils/MainGrid";
import { LinkVoirCarte } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Création de la carte ou du badge",
    "Validation"
];

const CartesPages = 2;

const CarteData = {
    id: "0987",
    type: "Carte",
    typeOptions: [{ label: "Carte", value: 1 }, { label: "Badge", value: 2 }],
    marque: "Toyota",
    marqueOptions: [{ label: "Toyota", value: 1 }, { label: "Honda", value: 2 }],
    usage: "Usage",
    usageOptions: [{ label: "Usage", value: 1 }, { label: "Usage2", value: 2 }],
    facturation: "Facturation",
    facturationOptions: [{ label: "Mensuel", value: 1 }, { label: "Annuel", value: 2 }],
    numero: "123456789",
};

const AjouterSinistre = () => {

    const [step, setStep] = React.useState(1);
    const handleStepChange = (step) => {setStep(step);};
    const onComplete = () => {handleStepChange(step+1);}
    const onRegister = () => {console.log("Registered");}
    const onClick = () => {console.log("Clicked");}

    return (
        <MainGrid
            carte={true}
            circles={CartesPages}
            data={CarteData}
            page={step}
            text={CirclesText[step-1]}
            title={"Badge créé"}
            localContent={
                step == 1 ?
                <Carte1
                    carte={CarteData}
                    onComplete={onComplete}
                    onRegister={onRegister}
                />
                : <Carte2
                    buttonTitle={"Badge"}
                    onClick={onClick}
                    to={LinkVoirCarte}
                />
            }
        />
    );
}

export default AjouterSinistre;