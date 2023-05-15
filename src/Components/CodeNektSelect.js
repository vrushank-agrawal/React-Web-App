import React from "react";
import PropTypes from 'prop-types';
import { Select, MenuItem } from "@mui/material";

// CodeNekt imports
import { GREYBACK, ORANGELIGHT } from "../utils/colors";
import { MICRO } from "../utils/fontSize";

const CodeNektSelect = (props) => {
    return (
        <Select
            height={props.height}
            label={props.label}
            multiple={props.multiple}
            onChange={props.onChange}
            {...(props.renderValue && { renderValue: props.renderValue })}
            size="small"
            sx={{
                backgroundColor: props.backgroundColor,
                fontSize: props.fontSize,
                margin: props.margin,
                '& svg': {
                    color: ORANGELIGHT,
                },
                width: props.width,
            }}
            value={props.value}
            variant="outlined"
            width={props.width}
        >
            {props.options.map((option, index) => {
                return (
                    <MenuItem key={index} value={option.value} style={{fontSize: props.fontSize}}> {option.label} </MenuItem>
                );
            })}
        </Select>
    );
};

CodeNektSelect.propTypes = {
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
    })),
    renderValue: PropTypes.func,
    value: PropTypes.number,
    width: PropTypes.string,
};

CodeNektSelect.defaultProps = {
    backgroundColor: GREYBACK,
    fontSize: MICRO,
    height: "inherit",
    label: "Selectioner",
    margin: "0 0 2% 2%",
    multiple: false,
    onChange: () => {},
    options: [],
    value: 0,
    width: "100%",
};

export default CodeNektSelect;