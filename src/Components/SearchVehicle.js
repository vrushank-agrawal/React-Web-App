import React from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// CodeNekt imports
import { MICROPLUS } from "../utils/fontSize";
import { GREYBACK } from "../utils/colors";

const SearchVehicle = (props) => {
    return (
        <Autocomplete
            disablePortal
            options={props.allVehicles}
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: ( <InputAdornment position="end"> <SearchIcon /> </InputAdornment> ),
                        type: 'search',
                    }}
                    label="Véhicule"
                    size="small"
                    sx={{ fontSize: MICROPLUS, }}
                />
            )}
            sx={{
                backgroundColor: GREYBACK,
                borderRadius: 50,
                fontSize: MICROPLUS,
                margin: "auto",
                width: props.width,
            }}
        />
    );
};

export default SearchVehicle;