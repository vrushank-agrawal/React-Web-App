import React from "react";

// Local imports
import { sinistres as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import CodeNektTable from '../Components/CodeNektTable';
import CodenektButton from "../Components/CodeNektButton";
import { ORANGEDARK, ORANGELIGHT } from "../utils/colors";

// Material UI imports
import { CodeNektEye } from "../Components/CodeNektIcons";

const column = {
    names: [
        { title: "Date".toLocaleUpperCase(), field: "Date", width: 100 },
        { title: "Vehicle".toLocaleUpperCase(), field: "Vehicle", width: 100 },
        { title: "Nom du Sinistre".toLocaleUpperCase(), field: "Nom", width: 180 },
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
                    />
                </>
                )}
        },
    ],
}

function Claims () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            SINISTRES
        </h1>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
  );
}

export default Claims;