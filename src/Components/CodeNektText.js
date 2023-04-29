import PropTypes from 'prop-types';
import {WHITECN, BLACKCN} from '../utils/colors.js';
import {FONTREGULAR, FONTSEMIBOLD} from '../utils/fonts.js';

function CodeNektText(props) {

    let style = {
        color:  props.dark ? BLACKCN :
                props.error ? BLACKCN : WHITECN,
        fontFamily: props.fontDefault ? 'arial' :
                    props.semiBold ? FONTSEMIBOLD : FONTREGULAR,
        fontSize: props.error ? '1.5rem' : props.size,
        fontWeight: props.bold ? 'bold' : 'normal',
        textDecorationLine: props.underline ? 'underline' : 'none',
        top: props.top,
    }

    if (props.color !== "auto")
        style.color = props.color;

    if (props.center)
        style = {
            ...style,
            textAlign: 'center',
            selfAlign: 'center',
        }


    if (props.shadow)
        style = {
            ...style,
            textShadowColor: BLACKCN,
            textShadowOffset: {width: 1, height: 0},
            textShadowRadius: 10,
        }

    return (
        <p style={style}>
            {props.children}
        </p>
    );
}

CodeNektText.propTypes = {
    dark:PropTypes.bool,
    size:PropTypes.number,
    bold:PropTypes.bool,
    center:PropTypes.bool,
    blue: PropTypes.bool,
    grey: PropTypes.bool,
    top: PropTypes.number,
    error: PropTypes.bool,
    color: PropTypes.string,
    shadow: PropTypes.bool,
};

CodeNektText.defaultProps = {
    dark: false,
    size: 15,
    bold:false,
    center:false,
    blue: false,
    grey:false,
    top:0,
    error: false,
    color:'auto',
    shadow: false,
};

export default CodeNektText;