import React from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { FormControl } from "@mui/base";

// CodeNekt imports
import { LITTLE, MICROPLUS } from "../utils/fontSize";
import { GREYBACK } from "../utils/colors";
import { Input as SearchInput } from "./CodeNektInput";

const CodeNektSearch = (props) => {

    const SearchFontSize = props.fontSize ?? MICROPLUS;

    return (
        <Autocomplete
            disablePortal
            options={props.searchData ?? []}
            renderInput={(params) => (
                <FormControl variant="standard">
                    <SearchInput
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: ( <InputAdornment position="end"> <SearchIcon /> </InputAdornment> ),
                            type: 'search',
                        }}
                        placeholder={props.label}
                        size="small"
                        sx={{
                            fontSize: SearchFontSize,
                        }}
                    />
                </FormControl>
            )}
            sx={{
                backgroundColor: GREYBACK,
                borderRadius: 50,
                fontSize: SearchFontSize,
                margin: "auto",
                width: props.width,
            }}
        />
    );
};

export default CodeNektSearch;