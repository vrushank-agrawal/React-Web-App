import React from "react";
import {Grid} from "@mui/material";

// CodeNekt imports
import TCOHeader from "./TCOHeader";
import VehicleTile from "./VehicleTile";
import CollaboratorTile from "./CollaboratorTile";

import { TCOVehicles as colabData } from "../utils/TCO-test-data";


const TCO = () => {
    const VehicleData = colabData.map((item) => ({
        label: `${item.immat} ${item.marque} ${item.modele}`,
    }));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: "60rem" }}>
            <h1>TCO | COÛT DU PARC </h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={3} direction="column">
                    <Grid item xs={12} sm={12} md={12} >
                        <TCOHeader moyen="212,90€" total="12 212,90€" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} sm={6} md={6}>
                            <VehicleTile allVehicles={VehicleData} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <CollaboratorTile vehicles={colabData} />
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default TCO;