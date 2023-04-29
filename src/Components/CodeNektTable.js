import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "@material-table/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { RiDeleteBinLine } from "react-icons/ri";
import { TiArrowUnsorted } from "react-icons/ti";

// CodeNekt imports
import { FONTSEMIBIG, LITTLE } from "../utils/fontSize";
import { FONTBOLD, FONTREGULAR } from "../utils/fonts";
import { BLACKCN, ORANGELIGHT, ORANGEDARK, ORANGE } from "../utils/colors";

function CodeNektTable (props) {

    const theme = createTheme({
        components: {
            // set the properties of the table to hide the border
            MuiPaper: {
                styleOverrides: {
                    root: {
                        border: 'none',
                        boxShadow: 'none',
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
                        fontFamily: FONTBOLD,
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
        pageSize: 10,
        pageSizeOptions: [10],
        paginationType: 'stepped',
        paging: true,
        rowStyle: {
            fontFamily: FONTREGULAR,
            fontSize: LITTLE,
        },
        search: true,
        searchFieldAlignment: 'left',
        searchFieldVariant: "filled",
        selection: true,
        showFirstLastPageButtons: false,
        showSelectAllCheckbox: false,
        showTitle: false,
        sorting: true,
        style: {
            padding: '0 20px',
        },
        tableLayout: {
            minWidth: "100%",
            maxWidth: "100%",
        },
        toolbar: true,
        toolbarButtonAlignment: 'left',
    }

    const Localization = {
        toolbar: {
            searchPlaceholder: 'Recherche Nom Collaborateur par exemple',
        },
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                {props.header}
            </h1>
            <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: "white", borderRadius: "1%" }}>
            <MaterialTable
                actions={props.actions}
                columns={props.column.names}
                data={props.data}
                localization={Localization}
                options={TableOptions}
                style={{ margin: "0 3%" }}
                />
            </div>
            </ThemeProvider>
        </div>
    )
}

CodeNektTable.propTypes = {
    column: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired,
}

CodeNektTable.defaultProps = {
    column: {},
    data: [],
    header: "CodeNekt Table",
}

export default CodeNektTable;