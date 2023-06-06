import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// CodeNekt imports
import { GREYBACK } from '../utils/colors';
import { LITTLE, MICRO } from '../utils/fontSize';

export const SearchInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        backgroundColor: GREYBACK,
        borderRadius: 5,
        border: 'none',
        fontSize: LITTLE,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    },
    '& .MuiOutlinedInput-root fieldset': {
        border: 'none',
    },
}));

const CodeNektInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: GREYBACK,
        borderRadius: 2,
        border: 'none',
        display: 'inline-flex',
        fontSize: MICRO,
        height: '1rem',
        padding: '0 0.5rem',
        position: 'relative',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        width: 'auto',
    },
    '& .MuiOutlinedInput-root fieldset': {
        width: '100%',
    },
    '& .MuiTextField-root': {
        width: '100%',
    },
    '& .MuiFormField-input': {
        width: '100%',
    },
}));

const CodeNekInput = (props) => {
    return (
        <TextField
            onChange={props.onChange}
            size='small'
            style={{
                backgroundColor: GREYBACK,
                borderRadius: 5,
                border: 'none',
                fontSize: LITTLE,
                height: props.height,
                margin: "auto",
                width: props.width
            }}
            value={props.value}
        />
    );
}

CodeNektInput.propTypes = {
    height: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    width: PropTypes.string,
};

CodeNektInput.defaultProps = {
    height: "inherit",
    width: "100%",
};

export default CodeNektInput;