import React from 'react';
import PropTypes from 'prop-types';
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
        <button
        onClick={props.onClick}
        style={{
            backgroundColor: bgcolor,
            background: props.gradient ? `linear-gradient(${props.dir}, ${props.left}, ${props.right})` : bgcolor,
            borderRadius: '50px',
            color:  props.light ? ORANGELIGHT :
                    props.white ? BLACKCN :
                                  WHITECN,
            height: props.height,
            width: props.width,
            fontSize: props.size,
            margin: props.margin,
            fontWeight: props.bold ? 'bold' : 'normal',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
            fontFamily: FONTREGULAR,
            border: 'none',
        }}
        >
        {props.title}
        </button>
    </>
  )
}

CodenektButton.propTypes = {
    height: PropTypes.string,
    bold: PropTypes.bool,
    blue: PropTypes.bool,
    dark: PropTypes.bool,
    dir: PropTypes.string,
    gradient: PropTypes.bool,
    left: PropTypes.string,
    light: PropTypes.bool,
    margin: PropTypes.string,
    orange: PropTypes.bool,
    right: PropTypes.string,
    size: PropTypes.number,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    icon: PropTypes.object,
    width: PropTypes.number,
};

CodenektButton.defaultProps = {
    height: "1.3rem",
    bold: false,
    blue: false,
    dark: false,
    dir: "",
    gradient: false,
    left: "",
    light: false,
    margin: "5px",
    orange: false,
    right: "",
    size: 12,
    onPress: () => {},
    icon: <></>,
    width: 100,
};

export default CodenektButton
