import React from "react";
import { Grid } from "@mui/material";

// Local imports
import { sinistres as data } from "./utils/test-data";
import { FONTSEMIBIG, LITTLE2 } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import CodeNektTable from '../Components/CodeNektTable';
import CodenektButton from "../Components/CodeNektButton";
import { ORANGEDARK, ORANGELIGHT, WHITECN } from "../utils/colors";
import { CodeNektEye, CodeNektAdd } from "../Components/CodeNektIcons";
import { LinkAjoutSinistre, LinkVoirSinistre } from "../Components/CodeNektPageLinks";

const column = {
    names: [
        { title: "Date".toLocaleUpperCase(), field: "Date", width: 100 },
        { title: "Vehicle".toLocaleUpperCase(), field: "Vehicle", width: 100 },
        { title: "Nom du Sinistre".toLocaleUpperCase(), field: "Nom", width: 200 },
        { title: "Statut".toLocaleUpperCase(), field: "Statut", width: 120 },
        { title: "", field: "actions", width: 480, sorting: false, filtering: false, search: false, cellStyle: {textAlign: 'right'},
            render: (rowData) => {
                return(
                <>
                    <CodenektButton
                        orange
                        gradient dir={"to right"} left={ORANGEDARK} right={ORANGELIGHT}
                        onPress={() => console.log("Button pressed")}
                        startIcon={<CodeNektEye size={12} />}
                        title={"VOIR LE SINISTRE"}
                        to={LinkVoirSinistre}
                    />
                </>
                )}
        },
    ],
}

function Claims () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                    {"liste des sinistres".toLocaleUpperCase()}
                </h1>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "right"}}>
                <CodenektButton blue
                    color={WHITECN}
                    size={LITTLE2}
                    startIcon={<CodeNektAdd size={15} />}
                    title={"Ajouter un sinistre"}
                    to={LinkAjoutSinistre}
                />
            </Grid>
        </Grid>
        <CodeNektTable
            column={column}
            data={data}
            padding={"0.1rem"}
            selection={false}
        />
    </div>
  );
}

export default Claims;