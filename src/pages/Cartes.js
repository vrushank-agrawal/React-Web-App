import React from "react";
import { IconButton } from '@mui/material';

// Local imports
import { cartes as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import CodeNektTable from '../Components/CodeNektTable';

// Material UI imports
import { CodeNektDelete, CodeNektEye } from "../Components/CodeNektIcons";

const column = {
    names: [
        { title: "Type".toLocaleUpperCase(), field: "Type", width: 80 },
        { title: "Marque".toLocaleUpperCase(), field: "Marque", width: 110 },
        { title: "Usage".toLocaleUpperCase(), field: "Usage", width: 110 },
        { title: "N".toLocaleUpperCase(), field: "No", width: 120 },
        { title: "Collaborateur".toLocaleUpperCase(), field: "Collaborateur", width: 120 },
        { title: "Action".toLocaleUpperCase(), field: "actions", width: 480, sorting: false, filtering: false, search: false, cellStyle: {textAlign: 'right'},
            render: (rowData) => {
                return(
                <>
                    <IconButton> <CodeNektEye size={15} /> </IconButton>
                    <IconButton> <CodeNektDelete size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Cartes () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            LISTE DES CARTES ET BADGES
        </h1>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
  );
}

export default Cartes;