import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "@material-table/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// CodeNekt imports
import { FONTSEMIBIG, LITTLE } from "../utils/fontSize";
import { FONTBOLD, FONTREGULAR } from "../utils/fonts";
import { BLACKCN, ORANGELIGHT, ORANGEDARK, ORANGE } from "../utils/colors";
import { Toolbar, Typography } from "@mui/material";

function CodeNektTable (props) {

    const theme = createTheme({
        components: {
            // set the properties of the table to hide the border
            MuiPaper: {
                styleOverrides: {
                    root: {
                        border: 'none',
                        boxShadow: 'none',
                        paddingTop: '1rem',
                    },
                },
            },
            // set the properties of the search bar
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        width: '150%',
                        backgroundColor: 'smokewhite',
                        borderBottom: 'none',
                    },
                    input: {
                        width: '150%',
                        backgroundColor: 'smokewhite',
                        borderBottom: 'none',
                        height: '0.6rem',
                        padding: '3%',
                        placeHolder: 'Rechercher',
                    },
                },
            },
            // set the properties of the search bar icon (bug in the library)
            MuiInputAdornment: {
                marginTop: 0,
                styleOverrides: {
                    root: {
                        "&:not(.MuiInputAdornment-hiddenLabel)": {
                            root: {
                                marginTop: 0,
                            }
                        },
                        marginTop: 0,
                    },
                },
            },
            // set the property of the pagination to center
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        justifyContent: 'center',
                    },
                },
            },
            // set the properties of the table row lines to orange
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        borderBottomColor: ORANGELIGHT,
                        padding: 3,
                    },
                },
            },
            // set the properties of the checkbox
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        color: ORANGELIGHT,
                        transform: 'scale(0.6)',
                    },
                },
            },
            // set the properties of the column headers
            MuiTableSortLabel: {
                styleOverrides: {
                    root: {
                        fontWeight: 'bold',
                        color: BLACKCN,
                    },
                    icon: {
                        opacity: 1,
                        color: ORANGE,
                    },
                },
            },
            // set the alignment of the pagination to center
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        justifyContent: 'center',
                    },
                },
            },
            // set the color of all icons as orange
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: ORANGE,
                    },
                },
            },
            MuiButtonBase: {
                styleOverrides: {
                    root: {
                        color: ORANGE,
                        "& .MuiTableSortLabel-root.Mui-active": {
                            color: ORANGEDARK,
                        },
                    },
                },
            },
        },
    });

    const TableOptions = {
        actionsColumnIndex: -1,
        headerStyle: {
            fontWeight: 'bold',
        },
        maxHeight: 100,
        pageSize: props.rowsPerPage,
        pageSizeOptions: [10],
        paginationType: 'stepped',
        paging: true,
        rowStyle: {
            fontSize: LITTLE,
        },
        search: props.search,
        searchFieldAlignment: 'left',
        searchFieldVariant: "filled",
        selection: props.selection,
        showFirstLastPageButtons: false,
        showSelectAllCheckbox: false,
        showTitle: false,
        sorting: true,
        style: {
            padding: props.padding,
        },
        tableLayout: {
            minWidth: "100%",
            maxWidth: "100%",
        },
        toolbar: props.toolbar,
        toolbarButtonAlignment: 'left',
    }

    const Localization = {
        toolbar: {
            searchPlaceholder: 'Recherche Nom Collaborateur par exemple',
        },
    }

    // define a table header component in the toolbar for certain tables
    const TableHeader = ({header}) => {
        return (
            <Toolbar style={{ borderBottom: "1px solid ORANGELIGHT" }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} > {header} </Typography>
            </Toolbar>
        )
    }

    return (
        <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: "white", borderRadius: "1%" }}>
            {props.header && <TableHeader header={props.header} />}
            <MaterialTable
                actions={props.actions}
                columns={props.column.names}
                data={props.data}
                localization={Localization}
                // onSelectionChange={props.onSelectionChange}
                options={TableOptions}
                style={{ margin: "0 3%" }}
            />
        </div>
        </ThemeProvider>
    )
}

CodeNektTable.propTypes = {
    column: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    header: PropTypes.string,
    onSelectionChange: PropTypes.func,
    padding: PropTypes.string,
    search: PropTypes.bool,
    selection: PropTypes.bool,
    rowsPerPage: PropTypes.number,
    toolbar: PropTypes.bool,
}

CodeNektTable.defaultProps = {
    column: {},
    data: [],
    header: "",
    onSelectionChange: "default",
    padding: "0 20px",
    search: true,
    selection: true,
    rowsPerPage: 10,
    toolbar: true,
}

export default CodeNektTable;