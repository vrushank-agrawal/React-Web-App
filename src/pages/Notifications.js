import React from "react";
import { IconButton } from "@mui/material";

// Local imports
import CodenektButton from "../Components/CodeNektButton";
import CodeNektTable from "../Components/CodeNektTable";
import { notifications as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import { CodeNektEye, CodeNektBell, CodeNektCheckCircle, CodeNektDelete } from "../Components/CodeNektIcons";
import { WHITECN } from "../utils/colors";

const column = {
    names: [
        { title: "Date", field: "Date", width: 100 },
        { title: "Type d'Intervention", field: "Type", width: 220 },
        { title: "XX-OOO-XX", field: "XX", width: 180 },
        { title: "Marque", field: "Marque", width: 100 },
        { title: "Collaborateur", field: "Collaborateur", width: 180 },
        { title: "Actions", field: "actions", width: 380, sorting: false, filtering: false, search: false,
            render: (rowData) => {
                return(
                <>
                    <IconButton> <CodeNektEye size={15} /> </IconButton>
                    <IconButton> <CodeNektCheckCircle size={15} /> </IconButton>
                    <CodenektButton
                        blue
                        color={WHITECN}
                        onPress={() => console.log("Button pressed")} width={200}
                        padding={"0 0.1rem"}
                        size={10}
                        startIcon={<CodeNektBell size={12}/>}
                        title={"Relancer le collaborateur"}
                    />
                    <IconButton> <CodeNektDelete size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Notifications () {

    return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            NOTIFICATIONS
        </h1>
        <CodeNektTable
            column={column}
            data={data}
        />
    </div>
    )
}

export default Notifications;