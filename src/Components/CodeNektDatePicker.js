import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material';
import { GREYBACK } from '../utils/colors';

// Date picker imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MICRO } from '../utils/fontSize';

const DatePickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: GREYBACK,
                    fontSize: MICRO,
                    height: "1rem",
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    height: "1rem",
                },
            },
        },
    },
});

const CodeNektDatePicker = (props) => {
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={DatePickerTheme}>
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