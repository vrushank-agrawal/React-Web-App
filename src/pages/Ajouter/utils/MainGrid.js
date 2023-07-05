import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

// Local imports
import { FONTSEMIBIG, MINIBIG } from '../../../utils/fontSize';
import { FONTBOLD } from '../../../utils/fonts';
import { GREYTEXT2, BLACKCN } from '../../../utils/colors';
import DisplayHeader from './DisplayHeader';

const MainGrid = (props) => {
    return (
    <div style={{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: "100%",
    }}>
        <h1 size={FONTSEMIBIG}
            style={{
                fontWeight: FONTBOLD,
                margin: "0",
                marginRight: "auto"
        }}>
            AJOUTER {props.ajouter}
        </h1>
        <Paper elevation={3}
            style={{
                height: "37rem",
                marginTop: "1rem",
                padding: "1rem",
                width: "70rem"
            }}
        >
            <Grid container direction={"column"}>
                <Grid item xs={12} sm={12} md={12}>
                    <DisplayHeader
                        text={props.text}
                        circles={props.circles}
                        page={props.page}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{marginBottom: "0.5rem"}}>
                    <Typography
                        color={GREYTEXT2}
                        fontSize={MINIBIG}
                        style={props.carte &&
                            props.page == props.circles
                            ? { marginTop: "6rem",
                                marginBottom: "2rem",
                                textAlign: "center",
                                color: BLACKCN,}
                            : {textAlign: "center"}
                        }
                        >
                    { props.carte == true ?
                        props.page == props.circles ?
                        props.title : props.text.toLocaleUpperCase()
                        : props.text.toLocaleUpperCase()
                    }
                    </Typography>
                    {   props.carte == true ?
                        props.page == props.circles ?
                        props.localContent : null
                        : null
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    { props.carte == true ?
                        props.page < props.circles ?
                        props.localContent : null
                        : props.localContent
                    }
                </Grid>
            </Grid>
        </Paper>
    </div>
    );
}

export default MainGrid;