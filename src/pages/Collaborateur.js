import React from "react";
import CodeNektTable from "../Components/CodeNektTable";
import CodenektButton from "../Components/CodeNektButton";

// Local imports
import { collaborator as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";

// Material UI imports
import { BLACKCN, WHITECN } from "../utils/colors";
import { Stack } from "@mui/material";
import { CodeNektEye } from "../Components/CodeNektIcons";

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
                            to={"/voir/collaborateur"}
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
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            Collaborateur
        </h1>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
  );
}

export default Collaborator;