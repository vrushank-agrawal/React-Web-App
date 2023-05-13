import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';

import { FONTSEMIBIG } from '../utils/fontSize';
import { FONTBOLD } from '../utils/fonts';
import { WHITECN } from '../utils/colors';

import NotificationTable from './Dashboard/NotificationTable';
import VehiclesTable from './Dashboard/VehiclesTable';
import SinistreTable from './Dashboard/SinistresTable';
import TCOTable from './Dashboard/TCOTable';

function Dashboard (props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "90%" }}>
            <h1 size={FONTSEMIBIG} style={{fontWeight: FONTBOLD}}>
                TABLEAU DE BORD&emsp;
                <span style={{fontSize: "1.4rem", color: WHITECN}}>
                    Bienvenue
                </span>
            </h1>
            <Grid container spacing={1.5}>
                <Grid item xs={12} sm={5} md={4}>
                    <Grid container item xs={12} sm={12} md={12} spacing={1.5} direction="column">
                        <Grid item xs={12} sm={4} md={4}>
                            <div style={{ width: '100%' }}> <VehiclesTable /> </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div style={{ width: '100%' }}> <TCOTable /> </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Grid container item xs={12} sm={12} md={12} spacing={1.5} direction="column">
                        <Grid item xs={12} sm={8} md={8}>
                            <NotificationTable />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <SinistreTable />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;