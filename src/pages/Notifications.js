import MaterialTable from "@material-table/core";
import { notifications as column } from "./columns";
import { notifications as data } from "./test-data";
import { MTableToolbar } from "@material-table/core";
import { FONTSEMIBIG } from "../utils/fontSize";
import { FONTSEMIBOLD } from "../utils/fonts";

function Notifications () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <h1 size={FONTSEMIBIG} style={{fontFamily: FONTSEMIBOLD}}>
                NOTIFICATIONS
            </h1>
            <MaterialTable
                columns={column.names.map((name) => ({ title: name, field: name, width: column.width[name] }))}
                components={{
                    Toolbar: (props) => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "left"
                        }}
                      >
                        <MTableToolbar {...props} />
                      </div>
                    )
                }}
                data={data}
                options={{
                    headerStyle: {
                        fontWeight: 'bold',
                    },
                    maxHeight: 100,
                    pageSize: 10,
                    pageSizeOptions: [],
                    paginationPosition: 'center',
                    paging: true,
                    search: true,
                    selection: true,
                    showTitle: false,
                    sorting: true,
                    tableLayout: {
                        minWidth: "100%",
                        maxWidth: "100%",
                    },
                    toolbar: true,
                    toolbarButtonAlignment: 'left',
                }}
                />
        </div>
    )
}

export default Notifications;