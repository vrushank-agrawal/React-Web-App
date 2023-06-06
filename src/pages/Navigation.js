import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// ----------------- Pages -----------------
import CodeNektSidePanel from "../Components/CodeNektSidePanel";
import Login from "./Login/Login";
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
import VoirSinistre from "./Sinistre/VoirSinistre";

import VoirCarte from "./Carte/VoirCarte";

// ----------------- Ajouter -----------------
import AjouterCollaborateur from "./Ajouter/Collaborateur/AjouterCollaborateur";
import AjouterVehicule from "./Ajouter/Vehicule/AjouterVehicule";
import AjouterSinistre from "./Ajouter/Sinistre/AjouterSinistre";
import AjouterCarte from "./Ajouter/Carte/AjouterCarte";

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
    LinkAjoutSinistre,
    LinkAjoutCarte,

    LinkVoirCollab,
    LinkVoirVehicule,
    LinkVoirSinistre,
    LinkVoirCarte,
} from "../Components/CodeNektPageLinks.js";

const NavigationView = () => {
    return (
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

                <Route exact path={LinkSinistre} element={<Claims />} />
                <Route exact path={LinkAjoutSinistre} element={<AjouterSinistre />} />
                <Route exact path={LinkVoirSinistre} element={<VoirSinistre />} />

                <Route exact path={LinkNotifications} element={<Notifications />} />

                <Route exact path={LinkCartes} element={<Cartes />} />
                <Route exact path={LinkAjoutCarte} element={<AjouterCarte />} />
                <Route exact path={LinkVoirCarte} element={<VoirCarte />} />

                <Route exact path={LinkTCO} element={<TCO />} />
                <Route exact path={LinkServices} element={<Services />} />
                <Route exact path={LinkSettings} element={<Settings />} />
                <Route exact path={LinkSignout} element={<Signout />} />
            </Routes>
        </div>
    </main>
    );
};

function Navigation(props) {
    console.log("isconnected: ", props.userReducer.isAuthenticated);
    return (
    <>
    {!props.userReducer.isAuthenticated ? (
        <Login />
    ) : (
        <div className="Panel" style={{ display: 'flex' }}>
            <CodeNektSidePanel />
            <div style={{ margin: 'auto' }}>
                <NavigationView />
            </div>
        </div>
    )}
    </>
    );
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
    };
};

export default connect(mapStateToProps)(Navigation);
