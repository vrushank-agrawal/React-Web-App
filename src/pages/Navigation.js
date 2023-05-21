import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Collaborator from "./Collaborateur";
import Vehicles from "../pages/Vehicles";
import Notifications from "../pages/Notifications";
import Claims from "../pages/Claims";
import Cartes from "../pages/Cartes";
import TCO from "../pages/TCO";
import Services from "../pages/Services";
import Settings from "../pages/Settings";
import Signout from "../pages/Signout";

// ----------------- Voir Pages -----------------
import VoirCollaborateur from "./Collaborateur/VoirCollaborateur";

// ----------------- Ajouter -----------------
import AjouterCollaborateur from "./Ajouter/Collaborateur/AjouterCollaborateur";
import AjouterVehicule from "./Ajouter/Vehicule/AjouterVehicule";

import {
    LinkSinistre,
    LinkVehicule,
    LinkCollaborateur,
    LinkDashboard,
    LinkNotifications,
    LinkCartes,
    LinkTCO,
    LinkServices,
    LinkSettings,
    LinkSignout,

    LinkAjoutCollab,
    LinkAjoutVehicule,

    LinkVoirCollab,
} from "../Components/CodeNektPageLinks.js";

function Navigation() {
    return (
    <>
    <main style={{ position: 'relative', padding: 10 }}>
        <div class="routes"
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Routes>
                <Route exact path={LinkDashboard} element={<Dashboard />} />

                <Route exact path={LinkCollaborateur} element={<Collaborator />} />
                <Route exact path={LinkAjoutCollab} element={<AjouterCollaborateur />} />
                <Route exact path={LinkVoirCollab} element={<VoirCollaborateur />} />

                <Route exact path={LinkVehicule} element={<Vehicles />} />
                <Route exact path={LinkAjoutVehicule} element={<AjouterVehicule />} />

                <Route exact path={LinkNotifications} element={<Notifications />} />
                <Route exact path={LinkSinistre} element={<Claims />} />
                <Route exact path={LinkCartes} element={<Cartes />} />
                <Route exact path={LinkTCO} element={<TCO />} />
                <Route exact path={LinkServices} element={<Services />} />
                <Route exact path={LinkSettings} element={<Settings />} />
                <Route exact path={LinkSignout} element={<Signout />} />
            </Routes>
        </div>
    </main>
    </>
    );
}

export default Navigation;
