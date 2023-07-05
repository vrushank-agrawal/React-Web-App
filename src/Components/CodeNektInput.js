import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// CodeNekt imports
import { GREYBACK } from '../utils/colors';
import { MICRO } from '../utils/fontSize';

const CodeNektInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: GREYBACK,
        borderRadius: 2,
        border: 'none',
        display: 'inline-flex',
        fontFamily: "Poppins-Black",
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
        border: 'none',
    },
}));

export default CodeNektInput;