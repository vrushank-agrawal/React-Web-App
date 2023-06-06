import React, {useState} from "react";
import { IconButton, InputLabel, FormControl } from "@mui/material";

// Local imports
import CodenektButton from "../Components/CodeNektButton";
import CodeNektTable from "../Components/CodeNektTable";
import { notifications as data } from "./utils/test-data";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTBOLD } from "../utils/fonts";
import { CodeNektEye, CodeNektBell, CodeNektCheckCircle, CodeNektDelete } from "../Components/CodeNektIcons";
import { GREYBACK, WHITECN } from "../utils/colors";
import CodeNektSelect from "../Components/CodeNektSelect";

const GroupActions = (props) => {

    const handleGroupAction = (action) => {
        console.log('Selected Rows:', props.selectedRows);
        console.log('Action:', action);
    };

    return (
    <FormControl fullWidth>
        <InputLabel id="groupes-actions"> Actions groupées </InputLabel>
        <CodeNektSelect
            backgroundColor={GREYBACK}
            borderRadius={5}
            id={"groupes-actions"}
            label={"Actions groupées"}
            options={[
                { value: 'lues', label: 'Marquer comme lues' },
                { value: 'relancer', label: 'Relancer les collaborateurs' },
                { value: 'supprimer', label: 'Supprimer les notifications' },
            ]}
            onChange={handleGroupAction}
            value={props.selectedRows}
            width={"50%"}
        />
    </FormControl>
    )
};


function Notifications () {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectionChange = (rows) => {
        setSelectedRows(rows);
    };

    const column = {
        names: [
            { title: "Date", field: "Date", width: 100 },
            { title: "Type d'Intervention", field: "Type", width: 220 },
            { title: "XX-OOO-XX", field: "XX", width: 180 },
            { title: "Marque", field: "Marque", width: 100 },
            { title: "Collaborateur", field: "Collaborateur", width: 180 },
            { title:(<GroupActions rows={selectedRows} />), field: "actions", width: 380, sorting: false, filtering: false, search: false, textAlign: "right",
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

    return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
            NOTIFICATIONS
        </h1>
        <CodeNektTable
            column={column}
            data={data}
            onSelectionChange={handleSelectionChange}
        />
    </div>
    )
}

export default Notifications;