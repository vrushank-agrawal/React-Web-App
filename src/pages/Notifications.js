import React from "react";
import CodeNektTable from "../Components/CodeNektTable";
import CodenektButton from "../Components/CodeNektButton";

// Local imports
import { notifications as data } from "./utils/test-data";

// Material UI imports
import { ImEye } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { IconButton } from "@mui/material";

const column = {
    number: 5,
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
                    <CodenektButton icon={<CiBellOn/>} blue title={"Relancer le collaborateur"}
                        onPress={() => console.log("Button pressed")} width={200} />
                    <IconButton> <RiDeleteBin6Line size={15} /> </IconButton>
                </>
                )}
        },
    ],
}

function Notifications () {

    return (
    <>
        <CodeNektTable
            column={column}
            data={data}
            header="Notifications"
        />
    </>
    )
}

export default Notifications;