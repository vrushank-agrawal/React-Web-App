import React, { useState } from "react";
import { LITTLE } from "../utils/fontSize";
import { Button } from "@mui/material";

const SizeTooLarge = "Taille du fichier doit être inférieure à 10 Mo";
export const FormatAcceptes = "Formats acceptés: Jpeg, Jpg et Png. Taille: moins de 10 Mo";

export const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
        alert(FormatAcceptes);
        return false;
    }

    if (file.size > maxSizeInBytes) {
        alert(SizeTooLarge);
        return false;
    }

    return true;
};

const CodeNektFileUploader = (props) => {
    return (
    <>
        <input
            accept=".jpeg, .jpg, .png"
            id="contained-button-file"
            onChange={props.handleFileChange}
            style={{ display: 'none' }}
            type="file"
        />
        <label htmlFor="contained-button-file" style={{display: "flex", height: "1rem"}}>
            <Button variant="standard" component="span" sx={{fontSize: LITTLE, fontFamily: "Poppins-Black",}}>
                Télécharger
            </Button>
        </label>
    </>
    );
};

export default CodeNektFileUploader;
