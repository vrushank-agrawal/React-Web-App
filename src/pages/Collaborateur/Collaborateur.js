import React from "react";
import { Grid, Stack } from "@mui/material";

// Local imports
import CodeNektTable from "../../Components/CodeNektTable";
import CodenektButton from "../../Components/CodeNektButton";
import { collaborator as data } from "../utils/test-data";
import { FONTSEMIBIG, LITTLE2 } from "../../utils/fontSize";
import { FONTBOLD } from "../../utils/fonts"
import { BLACKCN, WHITECN } from "../../utils/colors";
import { CodeNektEye, CodeNektAdd } from "../../Components/CodeNektIcons";
import { LinkAjoutCollab, LinkVoirCollab } from "../../Components/CodeNektPageLinks";

const column = {
    names: [
        { title: "Cat", field: "Cat", width: 100 },
        { title: "Nom", field: "Nom", width: 100 },
        { title: "Prénom", field: "Prenom", width: 100 },
        { title: "Vehicle", field: "Vehicle", width: 100 },
        { title: "Marque", field: "Marque", width: 180 },
        { title: "", field: "actions", width: 400, sorting: false, filtering: false, search: false,
        cellStyle: {textAlign: 'right'},
            render: (rowData) => {
                return(
                <>
                    <Stack direction="row" spacing={2}>
                        <CodenektButton
                            white
                            bold
                            borderColor={BLACKCN}
                            onPress={() => console.log("Button pressed")}
                            startIcon={<CodeNektEye size={12} />}
                            title={"Voir le vehicule"}
                        />
                        <CodenektButton
                            blue
                            bold
                            color={WHITECN}
                            onPress={() => console.log("Button pressed")}
                            startIcon={<CodeNektEye size={12} />}
                            title={"Voir le collaborateur"}
                            to={LinkVoirCollab}
                        />
                    </Stack>
                </>
                )}
        },
    ],
}

function Collaborator() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                    {"liste des collaborateurs".toLocaleUpperCase()}
                </h1>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} style={{display: "flex", justifyContent: "right"}}>
                <CodenektButton blue
                    color={WHITECN}
                    size={LITTLE2}
                    startIcon={<CodeNektAdd size={15} />}
                    title={"Ajouter un collaborateur"}
                    to={LinkAjoutCollab}
                />
            </Grid>
        </Grid>
        <CodeNektTable
            column={column}
            data={data}
            selection={false}
        />
    </div>
  );
}

export default Collaborator;