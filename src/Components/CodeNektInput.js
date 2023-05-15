import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// CodeNekt imports
import { GREYBACK } from '../utils/colors';
import { LITTLE } from '../utils/fontSize';

export const Input = styled(TextField)(({ theme }) => ({
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
        // width: '100%',
    },
}));

const CodeNektInput = (props) => {
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