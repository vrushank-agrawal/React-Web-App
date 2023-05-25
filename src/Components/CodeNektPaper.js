import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { WHITECN } from "../utils/colors";

const CodeNektPaper = (props) => {
    return (
        <Paper
            elevation={props.elevation}
            style={{
                backgroundColor: props.backgroundColor,
                // borderRadius: props.borderRadius,
                // display: props.display,
                // flexDirection: props.flexDirection,
                height: props.height,
                justifyContent: props.justifyContent,
                margin: props.margin,
                // padding: props.padding,
                width: props.width,
            }}
        >
            {props.children}
        </Paper>
    );
};

CodeNektPaper.propTypes = {
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    children: PropTypes.node,
    display: PropTypes.string,
    elevation: PropTypes.number,
    flexDirection: PropTypes.string,
    height: PropTypes.string,
    justifyContent: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
};

CodeNektPaper.defaultProps = {
    backgroundColor: WHITECN,
    borderRadius: "",
    children: null,
    display: "",
    elevation: 3,
    flexDirection: "",
    height: "100%",
    justifyContent: "",
    margin: "0px",
    padding: "0px",
    width: "100%",
};

export default CodeNektPaper;
