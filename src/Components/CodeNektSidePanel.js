import React from 'react';
import { Link } from 'react-router-dom';

// Side Panel Imports
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "../css/CodeNektSidePanel.css"

// Import Icons
import LogoWhite from "../assets/svg/logo/logo_full.svg";

// Import Menu Icons
import { ORANGEDARK } from '../utils/colors';
import { CodeNektBellFill, CodeNektCar, CodeNektDashboard,
    CodeNektDocument, CodeNektEuro, CodeNektMap, CodeNektLeaf,
    CodeNektPersonFill, CodeNektQuestion, CodeNektSettings,
    CodeNektSignIn, CodeNektSignOut, CodeNektDoubleArrowRight, CodeNektDoubleArrowLeft } from './CodeNektIcons';

function CodeNektSidePanel(props) {
    const { collapseSidebar, _, collapsed } = useProSidebar();

    return (
        <div id='sidePanel' style={{backgroundColor: ORANGEDARK}}>
            <Sidebar backgroundColor='ORANGEDARK'
                style={{height: '100vh'}}
            >
                <Menu>
                    <div className='CodeNektSidePanel__close'
                        style={{float: "right"}}
                        onClick={() => collapseSidebar()}
                    >
                        {collapsed  ? <CodeNektDoubleArrowRight /> : <CodeNektDoubleArrowLeft />}
                    </div>
                    <div className='CodeNektSidePanel__logo'>
                        <img src={LogoWhite} alt=''/>
                    </div>

                    <MenuItem icon={<CodeNektDashboard />} component={<Link to='/' />}> TABLEAU DE BORD </MenuItem>
                    <MenuItem icon={<CodeNektPersonFill />} component={<Link to='/collaborator' />}> COLLABORATEURS </MenuItem>
                    <MenuItem icon={<CodeNektCar />} component={<Link to='/vehicles' />}> VEHICULES </MenuItem>
                    <MenuItem icon={<CodeNektBellFill />} component={<Link to='/notifications' />}> NOTIFICATIONS </MenuItem>
                    <MenuItem icon={<CodeNektSignIn />} component={<Link to='/claims' />}> SINISTRES </MenuItem>

                    <MenuItem icon={<CodeNektDocument />} component={<Link to='/cartes' />} > CARTES & BADGES </MenuItem>
                    <MenuItem icon={<CodeNektEuro />} component={<Link to='/tco' />} > TCO </MenuItem>
                    <MenuItem icon={<CodeNektLeaf />} disabled> CONDUITE </MenuItem>
                    <MenuItem icon={<CodeNektMap />} disabled> GEOLOCALISATION </MenuItem>
                    <MenuItem icon={<CodeNektSignIn />} component={<Link to='/services' />}> SERVICES </MenuItem>

                    <MenuItem icon={<CodeNektQuestion />}disabled> AIDE </MenuItem>
                    <MenuItem icon={<CodeNektSettings />} component={<Link to='/settings' />}> PARAMETRES </MenuItem>
                    <MenuItem icon={<CodeNektSignOut />} component={<Link to='/signout' />}> DECONNEXION </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default CodeNektSidePanel;