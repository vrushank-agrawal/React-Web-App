import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { BLUECN } from "../../utils/colors";

const IconWithBackground = (props) => {
    return (
        <Box>
            <Box sx={{
                alignItems: "center",
                backgroundColor: BLUECN,
                borderRadius: "50%",
                display: "flex",
                height: props.iconRadius,
                justifyContent: "center",
                margin: "0.5rem 0",
                width: props.iconRadius,
            }}>
                {props.icon}
            </Box>
        </Box>
    );
};

IconWithBackground.propTypes = {
    icon: PropTypes.element.isRequired,
    iconRadius: PropTypes.string,
};

IconWithBackground.defaultProps = {
    iconRadius: "1rem",
};

export default IconWithBackground;