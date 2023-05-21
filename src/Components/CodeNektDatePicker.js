import React from 'react';
import PropTypes from 'prop-types';
import {createTheme, ThemeProvider} from '@mui/material';

// Date picker imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// CodeNekt imports
import { GREYBACK } from '../utils/colors';
import { LITTLE2 } from '../utils/fontSize';

const DatePickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: GREYBACK,
                    fontSize: LITTLE2,
                    height: "2rem",
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
                style={{
                    height: "1rem",
                }}
                value={props.selectedDate}
            />
        </ThemeProvider>
    </LocalizationProvider>
    );
};

CodeNektDatePicker.propTypes = {
    alignSelf: PropTypes.string,
    black: PropTypes.bool,
    blue: PropTypes.bool,
    bold: PropTypes.bool,
    border: PropTypes.string,
};

CodeNektDatePicker.defaultProps = {
    alignSelf: "center",
    black: false,
    blue: false,
    bold: false,
    border: "none",
};

export default CodeNektDatePicker;