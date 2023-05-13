import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "@material-table/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toolbar, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/material";

// CodeNekt imports
import { FONTSEMIBIG, LITTLE } from "../utils/fontSize";
import { FONTBOLD, FONTREGULAR } from "../utils/fonts";
import { BLACKCN, ORANGELIGHT, ORANGEDARK, ORANGE, WHITECN } from "../utils/colors";

function CodeNektTableSmall (props) {

    const theme = createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        // paddingRight: '1rem',
                        // paddingLeft: '1rem',
                        border: 'none',
                        boxShadow: 'none',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        '& td': {border: 'none',}
                    },
                },
            },
        },
    });

    const options = {
        search: false,
        paging: false,
        toolbar: false,
        headerStyle: {
            backgroundColor: WHITECN,
            color: BLACKCN,
            fontFamily: FONTBOLD,
            fontSize: FONTSEMIBIG,
            bottomBorder: '1px solid ORANGELIGHT',
        },
        rowStyle: {
            fontFamily: FONTREGULAR,
            border: 'none',
        },
    };

    const TableHeader = ({header}) => {
        return (
            <Toolbar style={{ borderBottom: "1px solid ORANGELIGHT" }}>
                <Typography fontSize={FONTSEMIBIG} fontWeight={FONTBOLD} > {header} </Typography>
            </Toolbar>
        )
    }

    return (
        <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: "white", borderRadius: "1%", display: "flex", flexDirection: "column", }}>
            {props.header && <TableHeader header={props.header} />}
            <Paper>
            <MaterialTable
                title={props.header}
                columns={props.column.names}
                data={props.data}
                options={options}
            />
            </Paper>
            {props.button &&
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", paddingBottom: "1rem"}}>
                {props.button}
            </div>
            }
        </div>
        </ThemeProvider>
    );
}


CodeNektTableSmall.propTypes = {
    column: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired,
    button: PropTypes.object,
}

CodeNektTableSmall.defaultProps = {
    column: {},
    data: [],
    header: "",
    button: <></>,
}

export default CodeNektTableSmall;
