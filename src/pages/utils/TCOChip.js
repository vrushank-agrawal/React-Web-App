import React from "react"
import { Chip } from "@mui/material"
import { ORANGELIGHT } from "../../utils/colors"

const TCOChip = (props) => {
    return (
        <Chip
            label={props.label}
            variant='outlined'
            sx={{
                borderColor: ORANGELIGHT,
                color: props.color,
                fontFamily: "Poppins-Black",
                fontSize: props.fontSize,
                margin: "auto",
                padding: "0.2rem",
            }}
        />
    )
}

export default TCOChip;