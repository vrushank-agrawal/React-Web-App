import React from "react";
import { BLACKCN, ORANGEDARK, ORANGELIGHT } from "../../../utils/colors";
import CodenektButton from "../../../Components/CodeNektButton";

// ---------------------------------------------
// BUTTONS
// ---------------------------------------------

export const PrecedentButton = (props) => {
    return (
        <CodenektButton grey
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Précédent"}
            width={props.width ?? "40%"}
        />
    );
};

export const EnregistrerButton = (props) => {
    return (
        <CodenektButton grey
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer"}
            width={props.width ?? "30%"}
        />
    );
};

export const EnregistrerContinuerButton = (props) => {
    const valider = props.valider == true ? " et valider" :
                    props.carte == true ? "" : " et continuer";

    return (
        <CodenektButton
            color={BLACKCN}
            margin={"0.5rem"}
            onClick={props.onClick}
            title={"Enregistrer"+ valider}
            width={props.width ?? "40%"}
        />
    );
};

export const GradientButton = (props) => {
    return (
    <CodenektButton bold gradient
        dir={"to right"}
        left={ORANGEDARK}
        right={ORANGELIGHT}
        onClick={props.onComplete}
        title={props.title}
    />
    );
};