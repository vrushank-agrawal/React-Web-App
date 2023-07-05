import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

// CodeNekt imports
import DisplayHeader from "../utils/DisplayHeader";
import { BLACKCN, GREYTEXT2 } from "../../../utils/colors";
import { LITTLE2, MINIBIG } from "../../../utils/fontSize";
import CodenektButton from "../../../Components/CodeNektButton";
import CodeNektSearch from "../../../Components/CodeNektSearch";
import CodeNektSelect from "../../../Components/CodeNektSelect";
import CodeNektInput from "../../../Components/CodeNektInput";

const Colab5FieldFontSize = LITTLE2;

const ButtonFooter = (props) => {
    return (
        <Grid container spacing={1.5} direction={"row"}>
            <Grid item xs={12} sm={4} md={4}>
                <CodenektButton grey bold
                    title="PRÉCÉDENT"
                    onClick={props.onPrevious}
                    width={"100%"}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <CodenektButton grey bold
                    title="ENREGISTRER"
                    onClick={() => {}}
                    width={"100%"}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <CodenektButton orange bold
                    title="ENREGISTRER ET CONTINUER"
                    onClick={props.onComplete}
                    width={"100%"}
                />
            </Grid>
        </Grid>
    );
};

const CarteBadgeTile = (props) => {
    return (
        <Paper elevation={3} style={{width: "100%"}}>
            <Grid container spacing={1.5} direction={"column"} style={{padding: "0.5rem 0 1rem 1rem"}}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography color={BLACKCN} fontSize={MINIBIG} style={{textAlign: "left", fontWeight: "bold"}}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={1.5} direction={"row"} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography color={BLACKCN} fontSize={Colab5FieldFontSize} style={{textAlign: "left"}}>
                                {props.title} N°
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <CodeNektSearch
                                searchData={props.searchData}
                                placeholder={props.title + " N°"}
                                width={"90%"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};


const AvantageTile = (props) => {
    const [Denomination, setDenomination] = React.useState("");
    const [Montant, setMontant] = React.useState("");
    const [Frequency, setFrequency] = React.useState("");

    const handleDenominationChange = (event) => {
        setDenomination(event.target.value);
    };

    const handleMontantChange = (event) => {
        setMontant(event.target.value);
    };

    const handleFrequencyChange = (event) => {
        setFrequency(event.target.value);
    };

    return (
        <Paper elevation={3} style={{width: "100%"}}>
            <Grid container spacing={1.5} direction={"column"} style={{padding: "0.5rem 0 0 1rem", marginTop: "0"}}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography color={BLACKCN} fontSize={MINIBIG} style={{textAlign: "left", fontWeight: "bold"}}> AVANTAGE </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={1.5} direction={"row"} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography color={BLACKCN} fontSize={Colab5FieldFontSize} style={{textAlign: "left"}}> Dénomination </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8.7} md={8.7}>
                            <CodeNektInput
                                onChange={handleDenominationChange}
                                value={Denomination}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{marginBottom: "1rem"}}>
                    <Grid container spacing={1.5} direction={"row"} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography color={BLACKCN} fontSize={Colab5FieldFontSize} style={{textAlign: "left"}}> Montant HT </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4.5} md={4.5}>
                            <CodeNektInput
                                onChange={handleMontantChange}
                                value={Montant}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4.2} md={4.2}>
                            <CodeNektSelect
                                fontSize={Colab5FieldFontSize}
                                onChange={handleFrequencyChange}
                                options={[
                                    {label: "mensuel", value: "mensuel"},
                                    {label: "annuel", value: "annuel"},
                                ]}
                                value={Frequency}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

const Colab5 = (props) => {
    return (
        <Grid container spacing={1.5} direction={"column"}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1.5} direction={"row"}>
                    <Grid item xs={12} sm={6} md={6}>
                        <CarteBadgeTile title={"Carte"} searchData={props.carteData} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <CarteBadgeTile title={"Badge"} searchData={props.badgeData} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AvantageTile />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <ButtonFooter onComplete={props.onComplete} onPrevious={props.onPrevious} />
            </Grid>
        </Grid>
    );
};

// const Colab5 = (props) => {

//     const CarteData = [ "99991", "99992", "99993", "99994", "99995", ];
//     const BadgeData = [ "99", "98", "97", "96", ];

//     const onComplete = () => {
//         props.onComplete(6);
//     }

//     const onPrevious = () => {
//         props.onComplete(4);
//     }

//     return (
//         <Grid container spacing={0} direction={"column"}>
//             <Grid item xs={12} sm={12} md={12}>
//                 <DisplayHeader
//                     text={"Cartes et badges"}
//                     circles={props.circles}
//                     page={5}
//                 />
//             </Grid>
//             <Grid item xs={12} sm={12} md={12} style={{marginBottom: "2rem", alignSelf: "top"}}>
//                 <Typography
//                     color={GREYTEXT2}
//                     fontSize={MINIBIG}
//                     style={{ textAlign: "center" }}
//                 >
//                     {props.text.toLocaleUpperCase()}
//                 </Typography>
//             </Grid>
//             <Grid item xs={12} sm={12} md={12} style={{padding: "0 15rem"}}>
//                 <LocalContent
//                     CarteData={CarteData}
//                     BadgeData={BadgeData}
//                     onComplete={onComplete}
//                     onPrevious={onPrevious}
//                 />
//             </Grid>
//         </Grid>
//     );
// };

export default Colab5;