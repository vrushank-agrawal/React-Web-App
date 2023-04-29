import React from 'react';
import PropTypes from 'prop-types';
import {ORANGEDARK, ORANGELIGHT, WHITECN, BLACKCN, BLUECN} from '../utils/colors.js';
import {FONTREGULAR} from '../utils/fonts.js';

function CodenektButton(props) {
    return (
    <>
        <button
        onClick={props.onClick}
        style={{
            backgroundColor:props.blue   ? BLUECN :
                            props.dark   ? BLACKCN :
                            props.light  ? WHITECN :
                            props.orange ? ORANGELIGHT :
                                           ORANGEDARK,
            borderRadius: '50px',
            color: props.light ? ORANGELIGHT : WHITECN,
            height: props.height,
            width: props.width,
            fontSize: props.size,
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
    light: PropTypes.bool,
    orange: PropTypes.bool,
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
    light: false,
    orange: false,
    size: 12,
    onPress: () => {},
    icon: <></>,
    width: 100,
};

export default CodenektButton
