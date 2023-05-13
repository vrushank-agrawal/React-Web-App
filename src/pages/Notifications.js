import React from "react";
import CodeNektTable from "../Components/CodeNektTable";
import CodenektButton from "../Components/CodeNektButton";

// Local imports
import { notifications as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";

// Material UI imports
import { ImEye } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { IconButton } from "@mui/material";

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
                    <IconButton> <ImEye size={15} /> </IconButton>
                    <IconButton> <BsCheckCircle size={15} /> </IconButton>
                    <CodenektButton
                        blue
                        size={10}
                        onPress={() => console.log("Button pressed")} width={200}
                        padding={"0 0.1rem"}
                        startIcon={<CiBellOn size={12}/>}
                        title={"Relancer le collaborateur"}
                    />
                    <IconButton> <RiDeleteBin6Line size={15} /> </IconButton>
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