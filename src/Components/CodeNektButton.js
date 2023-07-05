import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import {ORANGEDARK, ORANGELIGHT, WHITECN, BLACKCN, BLUECN, GREYBACK} from '../utils/colors.js';

function CodenektButton(props) {
    const bgcolor = props.blue   ? BLUECN :
                    props.black   ? BLACKCN :
                    props.white  ? WHITECN :
                    props.grey   ? GREYBACK :
                    props.orange ? ORANGELIGHT :
                    props.transparent ? "transparent" :
                                   ORANGEDARK
    return (
    <>
    <Button
        component={Link}
        onClick={props.onClick}
        style={{
            alignSelf: props.alignSelf,
            backgroundColor: bgcolor,
            background: props.gradient ? `linear-gradient(${props.dir}, ${props.left}, ${props.right})` : bgcolor,
            border: props.border,
            borderColor: props.borderColor,
            borderRadius: '50px',
            boxShadow: props.boxShadow,
            color:  props.color,
            fontFamily: "Poppins-Black",
            fontSize: props.size,
            fontWeight: props.bold ? 'bold' : 'normal',
            height: props.height,
            margin: props.margin,
            padding: props.padding,
            width: props.width,
        }}
        startIcon={props.startIcon}
        to={props.to}
        variant={props.variant}
    >
        {props.title}
    </Button>
    </>
  )
}

CodenektButton.propTypes = {
    alignSelf: PropTypes.string,
    black: PropTypes.bool,
    blue: PropTypes.bool,
    bold: PropTypes.bool,
    border: PropTypes.string,
    borderColor: PropTypes.string,
    boxShadow: PropTypes.string,
    color: PropTypes.string,
    dir: PropTypes.string,
    gradient: PropTypes.bool,
    grey: PropTypes.bool,
    height: PropTypes.string,
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
    to: PropTypes.string,
    variant: PropTypes.string,
    width: PropTypes.number,
};

CodenektButton.defaultProps = {
    alignSelf: "center",
    height: "1.3rem",
    black: false,
    blue: false,
    bold: false,
    border: "none",
    borderColor: "",
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    color: BLACKCN,
    dir: "",
    gradient: false,
    grey: false,
    left: "",
    light: false,
    margin: "5px",
    onClick: () => {},
    orange: false,
    padding: "0.1 1rem",
    right: "",
    size: 10,
    startIcon: <></>,
    to: "",
    variant: "outlined",
    width: "fit-content",
};

export default CodenektButton
