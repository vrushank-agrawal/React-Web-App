import React from "react";
import { Grid, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN } from "../../../utils/colors";
import { LITTLE2 } from "../../../utils/fontSize";

const Colab2 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography
                    color={BLACKCN}
                    fontSize={LITTLE2}
                    style={{ textAlign: "center", marginTop: "5rem"}}
                >
                    En attente de validation de votre collaborateur
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Colab2;