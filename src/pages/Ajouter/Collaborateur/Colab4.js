import React from "react";
import { Grid, Typography } from "@mui/material";

// CodeNekt imports
import CodeNektSearch from "../../../Components/CodeNektSearch";
import { BLACKCN, GREYTEXT2, ORANGE } from "../../../utils/colors";
import { LITTLE, MINIBIG } from "../../../utils/fontSize";
import CodeNektDatePicker from "../../../Components/CodeNektDatePicker";
import { GradientButton } from "../utils/Buttons";

const ChooseDate = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (date) => {setSelectedDate(date);};

    return (
        <Grid container spacing={1.5} direction={"row"} style={{display:"flex", alignItems:"center"}}>
            <Grid item xs={12} sm={6} md={6}>
                <Typography color={GREYTEXT2} style={{ textAlign: "left", fontSize: LITTLE }}>
                    DATE DE FIN D'AFFECTATION
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <CodeNektDatePicker
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </Grid>
        </Grid>
    );
};

const Colab4 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>

            {/* ------------------ Search Vehicle ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={BLACKCN} fontSize={MINIBIG} style={{margin: "2rem auto 0 auto"}}>
                    Rechercher du véhicule
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{width: "40%", margin: "auto"}}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Grid item xs={11} sm={11} md={11}>
                        <CodeNektSearch
                            label={"Véhicule"}
                            searchData={props.searchData}
                            width={"100%"}
                        />
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Typography style={{color: ORANGE, fontSize: MINIBIG}}> * </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ------------------ Choose Date ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{padding: "2rem 20rem 0 20rem"}}>
                <ChooseDate />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography color={ORANGE} fontSize={LITTLE} style={{margin: "1rem auto auto auto"}}>
                    * Complétez les champs obligatoires
                </Typography>
            </Grid>

            {/* ------------------ Button ------------------- */}

            <Grid item xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <GradientButton
                    onComplete={props.onComplete}
                    title="AFFECTER LE VÉHICULE"
                />
            </Grid>
        </Grid>
    );
};

export default Colab4;