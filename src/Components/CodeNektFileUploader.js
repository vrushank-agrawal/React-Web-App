import React, { useState } from "react";
import { LITTLE } from "../utils/fontSize";
import { Button } from "@mui/material";

const SizeTooLarge = "Taille du fichier doit être inférieure à 10 Mo";
const FormatAcceptes = "Formats acceptés: Jpeg, Jpg et Png";

const CodeNektFileUploader = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && validateFile(file)) {
            setSelectedFile(file);
            props.onFileUpload(file.name)
        } else {
            setSelectedFile(null);
        }
    };

    const validateFile = (file) => {
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

    return (
    <>
        <input
            accept=".jpeg, .jpg, .png"
            id="contained-button-file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            type="file"
        />
        <label htmlFor="contained-button-file" style={{display: "flex", height: "1rem"}}>
            <Button variant="standard" component="span" sx={{fontSize: LITTLE}}>
                Télécharger
            </Button>
        </label>
    </>
    );
};

export default CodeNektFileUploader;
