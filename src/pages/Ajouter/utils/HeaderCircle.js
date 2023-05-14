import React from 'react';
import { Box, Typography } from '@mui/material';

import { BLACKCN, ORANGEDULL, ORANGE } from '../../../utils/colors';

const constants = {
    height: 56,
    width: 56,
    bgcolor: ORANGE,
    color: BLACKCN,
    colorDull: ORANGEDULL,
}

const Circle = (props) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                bgcolor={props.number <= props.page ? constants.bgcolor : constants.colorDull}
                borderRadius="50%"
                width={constants.width}
                height={constants.height}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={constants.color}
                marginBottom={1}
            >
                {props.number}
            </Box>
        </Box>
    );
};

export default Circle;