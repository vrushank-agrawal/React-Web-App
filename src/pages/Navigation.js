import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Collaborator from "../pages/Collaborator";
import Vehicles from "../pages/Vehicles";
import Notifications from "../pages/Notifications";
import Claims from "../pages/Claims";
import Services from "../pages/Services";
import Settings from "../pages/Settings";
import Signout from "../pages/Signout";

function Navigation() {
    return (
    <>
    <main style={{ position: 'relative', padding: 10 }}>
        <div class="routes">
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/collaborator" element={<Collaborator />} />
                <Route exact path="/vehicles" element={<Vehicles />} />
                <Route exact path="/notifications" element={<Notifications />} />
                <Route exact path="/claims" element={<Claims />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/signout" element={<Signout />} />
            </Routes>
        </div>
    </main>
    </>
    );
}

export default Navigation;
