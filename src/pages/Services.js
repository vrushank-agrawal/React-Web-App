import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { ORANGEDARK, BLACKCN, WHITECN } from '../utils/colors';

const TCOHeader = (props) => {
    return (
        <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: BLACKCN, }}
                elevation={3}
        >
            <Typography variant="h5" sx={{ color: ORANGEDARK, fontWeight: 'bold' }}>
                SERVICES DISPONIBLES
            </Typography>
            <Typography variant="h5" sx={{ color: WHITECN, fontWeight: 'bold' }}>
                ACTIVER
            </Typography>
        </Paper>
    );
};

function Services() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "60rem" }}>
        <h1> SERVICES </h1>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={3} direction="column">
                    <Grid item xs={12} sm={12} md={12} >
                        <TCOHeader moyen="212,90€" total="12 212,90€" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12} sm={6} md={6}>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
);
}

export default Services;