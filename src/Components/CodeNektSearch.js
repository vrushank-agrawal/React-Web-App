import React from "react";
import { Autocomplete, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from "@mui/base";

// CodeNekt imports
import { LITTLE, MICROPLUS } from "../utils/fontSize";
import { GREYBACK } from "../utils/colors";
import CodeNektInput from "./CodeNektInput";

const CodeNektSearch = (props) => {

    const SearchFontSize = props.fontSize ?? MICROPLUS;

    return (
        <Autocomplete
            disablePortal
            options={props.searchData ?? []}
            renderInput={(params) => (
                <FormControl variant="standard">
                    <CodeNektInput
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: !props.noSearchIcon && ( <InputAdornment position="end"> <SearchIcon /> </InputAdornment> ),
                            type: 'search',
                        }}
                        placeholder={props.label}
                        size="small"
                        sx={{
                            fontFamily: "Poppins-Black",
                            fontSize: SearchFontSize,
                        }}
                    />
                </FormControl>
            )}
            sx={{
                backgroundColor: GREYBACK,
                borderRadius: 50,
                fontSize: SearchFontSize,
                heigh: props.height ?? 'inherit',
                margin: "auto",
                width: props.width,
            }}
        />
    );
};

export default CodeNektSearch;