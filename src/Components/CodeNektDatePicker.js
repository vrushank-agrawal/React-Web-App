import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material';

// Date picker imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CodeNektDatePicker = (props) => {
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={props.theme}>
            <DatePicker
                onChange={props.handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                value={props.selectedDate}
            />
        </ThemeProvider>
    </LocalizationProvider>
    );
};

CodeNektDatePicker.propTypes = {
    handleDateChange: PropTypes.func.isRequired,
    selectedDate: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

CodeNektDatePicker.defaultProps = {
    handleDateChange: () => {},
    selectedDate: null,
    theme: {},
};

export default CodeNektDatePicker;