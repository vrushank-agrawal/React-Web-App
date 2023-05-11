import React from "react";
import CodeNektTable from "../Components/CodeNektTable";
import CodenektButton from "../Components/CodeNektButton";

// Local imports
import { collaborator as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";

// Material UI imports
import { CiBellOn } from "react-icons/ci";

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
                    <CodenektButton icon={<CiBellOn/>} white title={"Voir le vehicule"}
                        onPress={() => console.log("Button pressed")} width={120}
                        margin={"0 15px 0 0"}
                    />
                    <CodenektButton icon={<CiBellOn/>} blue title={"Voir le collaborateur"}
                        onPress={() => console.log("Button pressed")} width={160}
                    />
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