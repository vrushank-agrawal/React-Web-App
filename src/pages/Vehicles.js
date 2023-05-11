import React from 'react';
import { IconButton } from '@mui/material';

// Local imports
import { vehicles as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import CodeNektTable from '../Components/CodeNektTable';

// import MUI icons
import { ImEye } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";

const column = {
    names: [
        { title: "Immat".toLocaleUpperCase(), field: "Immat", width: 100 },
        { title: "Marque".toLocaleUpperCase(), field: "Marque", width: 100 },
        { title: "Modele".toLocaleUpperCase(), field: "Modele", width: 180 },
        { title: "Cat".toLocaleUpperCase(), field: "Cat", width: 60 },
        { title: "Collaborateur".toLocaleUpperCase(), field: "Collaborateur", width: 180 },
        { title: "Entrée".toLocaleUpperCase(), field: "Entree", width: 100 },
        { title: "Sortie".toLocaleUpperCase(), field: "Sortie", width: 100 },
        { title: "Statut".toLocaleUpperCase(), field: "Statut", width: 180 },
        { title: "Actions".toLocaleUpperCase(), field: "actions", width: 80, sorting: false, filtering: false, search: false,
            render: (rowData) => {
                return(
                <>
                    <IconButton> <ImEye size={15} /> </IconButton>
                    <IconButton> <RiDeleteBin6Line size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Vehicles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            Vehicles
        </h1>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
  );
}

export default Vehicles;