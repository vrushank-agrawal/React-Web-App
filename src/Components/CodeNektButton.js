import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

import {ORANGEDARK, ORANGELIGHT, WHITECN, BLACKCN, BLUECN} from '../utils/colors.js';
import {FONTREGULAR} from '../utils/fonts.js';

function CodenektButton(props) {
    const bgcolor = props.blue   ? BLUECN :
                    props.dark   ? BLACKCN :
                    props.white  ? WHITECN :
                    props.orange ? ORANGELIGHT :
                                   ORANGEDARK
    return (
    <>
        <Button
        onClick={props.onClick}
        style={{
            backgroundColor: bgcolor,
            background: props.gradient ? `linear-gradient(${props.dir}, ${props.left}, ${props.right})` : bgcolor,
            border: "",
            borderColor: props.borderColor,
            borderRadius: '50px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
            color:  props.light ? ORANGELIGHT :
                    props.white ? BLACKCN :
                                  WHITECN,
            fontFamily: FONTREGULAR,
            fontSize: props.size,
            fontWeight: props.bold ? 'bold' : 'normal',
            height: props.height,
            margin: props.margin,
            padding: props.padding,
            width: props.width,
        }}
        startIcon={props.startIcon}
        variant={props.variant}
        >
        {props.title}
        </Button>
    </>
  )
}

CodenektButton.propTypes = {
    height: PropTypes.string,
    bold: PropTypes.bool,
    blue: PropTypes.bool,
    borderColor: PropTypes.string,
    dark: PropTypes.bool,
    dir: PropTypes.string,
    gradient: PropTypes.bool,
    left: PropTypes.string,
    light: PropTypes.bool,
    margin: PropTypes.string,
    onClick: PropTypes.func,
    orange: PropTypes.bool,
    padding: PropTypes.string,
    right: PropTypes.string,
    size: PropTypes.number,
    startIcon: PropTypes.object,
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    width: PropTypes.number,
};

CodenektButton.defaultProps = {
    height: "1.3rem",
    bold: false,
    blue: false,
    borderColor: "",
    dark: false,
    dir: "",
    gradient: false,
    left: "",
    light: false,
    margin: "5px",
    onClick: () => {},
    orange: false,
    padding: "0.1 1rem",
    right: "",
    size: 10,
    startIcon: <></>,
    variant: "outlined",
    width: "fit-content",
};

export default CodenektButton
