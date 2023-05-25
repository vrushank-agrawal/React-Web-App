import React from 'react';
import { Grid, IconButton } from '@mui/material';

// Local imports
import { vehicles as data } from "./utils/test-data";
import { FONTSEMIBIG, LITTLE2 } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import CodeNektTable from '../Components/CodeNektTable';
import { BLACKCN, WHITECN } from '../utils/colors';

// import MUI icons
import { CodeNektAdd, CodeNektDelete, CodeNektEye } from '../Components/CodeNektIcons';
import CodenektButton from '../Components/CodeNektButton';
import { LinkAjoutVehicule } from '../Components/CodeNektPageLinks';

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
                    <IconButton> <CodeNektEye size={15} /> </IconButton>
                    <IconButton> <CodeNektDelete size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Vehicles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                    {"liste des véhicules".toLocaleUpperCase()}
                </h1>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "right"}}>
                <CodenektButton blue
                    color={WHITECN}
                    size={LITTLE2}
                    startIcon={<CodeNektAdd size={15} />}
                    title={"Ajouter un véhicule"}
                    to={LinkAjoutVehicule}
                />
            </Grid>
        </Grid>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
  );
}

export default Vehicles;