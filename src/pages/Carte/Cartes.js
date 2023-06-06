import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { IconButton } from '@mui/material';

// Local imports
import { cartes as data } from "../utils/test-data";
import { WHITECN } from "../../utils/colors";
import { FONTSEMIBIG, LITTLE2 } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts";
import { CodeNektDelete, CodeNektEye, CodeNektAdd } from "../../Components/CodeNektIcons";
import { LinkAjoutCarte } from "../../Components/CodeNektPageLinks";
import CodeNektTable from '../../Components/CodeNektTable';
import CodenektButton from "../../Components/CodeNektButton";
import { LinkVoirCarte } from "../../Components/CodeNektPageLinks";

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
                    <Link to={LinkVoirCarte}> <IconButton> <CodeNektEye size={15} /> </IconButton> </Link>
                    <IconButton> <CodeNektDelete size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Cartes () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                    {"liste des cartes et badges".toLocaleUpperCase()}
                </h1>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "right"}}>
                <CodenektButton blue
                    color={WHITECN}
                    size={LITTLE2}
                    startIcon={<CodeNektAdd size={15} />}
                    title={"Ajouter une carte ou un badge"}
                    to={LinkAjoutCarte}
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

export default Cartes;