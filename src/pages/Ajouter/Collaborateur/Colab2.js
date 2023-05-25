import React from "react";
import { Grid, Typography } from "@material-ui/core";

import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2 } from "../../../utils/colors";
import { LITTLE2, MINIBIG } from "../../../utils/fontSize";

const Colab2 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <DisplayHeader
                    text={props.text}
                    circles={props.circles}
                    page={2}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography
                    color={GREYTEXT2}
                    fontSize={MINIBIG}
                    style={{ textAlign: "center", marginTop: "5rem"}}
                >
                    {props.text.toLocaleUpperCase()}
                </Typography>
            </Grid>
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