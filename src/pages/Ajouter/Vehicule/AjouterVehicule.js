import React from "react";

import Vehicule1 from "./Vehicule1";
import Vehicule2 from "./Vehicule2";
import Vehicule3 from "./Vehicule3";
import Vehicule4 from "./Vehicule4";
import Vehicule5 from "./Vehicule5";
import FinalPage from "../utils/FinalPage";
import MainGrid from "../utils/MainGrid"
import { LinkVoirVehicule } from "../../../Components/CodeNektPageLinks";

const CirclesText = [
    "Création de la fiche véhicule",
    "Contrat du véhicule",
    "Ajout des documents",
    "Affection du collaborateur",
    "Validation de la fiche véhicule",
];

const VehiculeData1 = {
    id: "12345",
    marque: "Renault",
    modele: "Clio",
    version: "AB-123-CD",
    boite: "Manuelle",
    carburant: "Essence",
    statut: "En service",
};

const VehiculeData2 = {
    pneusHIVER: [{label: "1",value: 1,},{label: "2",value: 2,},],
    pneusETE: [{label: "1",value: 1,},{label: "2",value: 2,},],
};

const FileData = {
    contrat: {name: ""},
    carteGrise: {numero: "", name: ""},
    carteAssurance: {numero: "", name: "", montant: "", montantFreq: "",},
};

import { VehicleSearchData as VehicleData4 } from "../../utils/TCO-test-data";

const VehiculeData5 = {
    vehicule: {
        id: "123456",
        marque: "Renault",
        modele: "Clio",
        version: "Clio 5",
        boiteManuelle: "Boite manuelle",
        puissanceFiscale: "5 CV",
        carburant: "Essence",
        dateMiseEnCirculation: "01/01/2021",
        statut: "En stock",
    },
    contrat: {
        numero: "123456",
        duree: "12 mois",
        dateEntree: "01/01/2021",
        dateSortie: "01/01/2022",
        kmContrat: "10000 km",
        pneus: "Pneus été",
        loyerHT: "1000 € HT",
        loyerFreq: "Mensuel",
    },
    documents: {
        contrat: "N. 12345",
        carteGrise: "N. 12345",
        assurance: "N. 12345",
    },
    collaborateur: {
        nom: "DUPONT",
        prenom: "Jean",
        siteHanes: "Paris",
        dateFinAffectation: "01/01/2022",
    },
};

const VehiculePages = 5;

const AjouterVehicule = () => {

    const [step, setStep] = React.useState(1);
    const handleStepChange = (step) => {setStep(step);};
    const onRegister = () => {console.log("Register");};
    const onComplete = () => {handleStepChange(step+1);}
    const onPrevious = () => {handleStepChange(step-1);}

    return (
    <>{
        step == VehiculePages+1 ?
        <FinalPage ajouter={"UN VÉHICULE"} title={"Fiche véhicule validée"} buttonTitle={"VÉHICULE"} to={LinkVoirVehicule} />
        :
        <MainGrid
            ajouter={"UN VÉHICULE"}
            circles={VehiculePages}
            page={step}
            text={CirclesText[step-1]}
            localContent={
                step == 1 ? <Vehicule1 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} vehicule={VehiculeData1} />
                : step == 2 ? <Vehicule2 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} data={VehiculeData2} />
                : step == 3 ? <Vehicule3 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} file={FileData} />
                : step == 4 ? <Vehicule4 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} searchData={VehicleData4} />
                : step == 5 ? <Vehicule5 onComplete={onComplete} onPrevious={onPrevious} onRegister={onRegister} data={VehiculeData5} />
                : null
            }
        />
    }</>
    );
}

export default AjouterVehicule;