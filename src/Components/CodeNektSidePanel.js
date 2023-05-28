import React from 'react';
import { Link } from 'react-router-dom';

// Side Panel Imports
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Styled from "styled-components";
import "../css/CodeNektSidePanel.css"
import CodeNektSearch from './CodeNektSearch';

// Import Icons
import LogoIcon from "../assets/svg/logo/logo_ICON.svg";

// Import Menu Icons
import { ORANGEDARK } from '../utils/colors';
import { LITTLE, LITTLE2, MICRO } from '../utils/fontSize';

import {
    CodeNektBellFill,
    CodeNektCar,
    CodeNektDashboard,
    CodeNektDocument,
    CodeNektEuro,
    CodeNektHexagons,
    CodeNektMap,
    CodeNektLeaf,
    CodeNektPersonFill,
    CodeNektQuestion,
    CodeNektSettings,
    CodeNektSignOut,
    CodeNektStar,
    CodeNektDoubleArrowRight,
    CodeNektDoubleArrowLeft,
    CodeNektSearchIcon} from './CodeNektIcons';

import { LinkServices,
    LinkCartes,
    LinkDashboard,
    LinkCollaborateur,
    LinkVehicule,
    LinkNotifications,
    LinkSinistre,
    LinkTCO,
    LinkSettings,
    LinkSignout } from './CodeNektPageLinks';

const data = [
    { label: "Véhicule 1" },
    { label: "Véhicule 2" },
    { label: "Véhicule 3" },
    { label: "Véhicule 4" },
    { label: "Véhicule 5" },
    { label: "Véhicule 3" },
    { label: "Véhicule 4" },
    { label: "Véhicule 5" },
    { label: "Véhicule 3" },
    { label: "Véhicule 4" },
    { label: "Véhicule 5" },
]

const SidePanelSearchButton = (props) => {
    return (
        <CodeNektSearch
            noSearchIcon={true}
            label={"Rechercher"}
            searchData={data}
            width={"100%"}
        />
    );
};

const StyledMenuItem = Styled(MenuItem)`
    height: 1rem;
    padding: 0.5rem 0;
`;

const ICONSIZE = 18;

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
                        <img src={LogoIcon} alt=''/>
                    </div>

                    <MenuItem icon={<CodeNektSearchIcon size={ICONSIZE} />}> <SidePanelSearchButton /> </MenuItem>

                    <StyledMenuItem icon={<CodeNektDashboard size={ICONSIZE} />} component={<Link to={LinkDashboard} />}> TABLEAU DE BORD </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektPersonFill size={ICONSIZE} />} component={<Link to={LinkCollaborateur} />}> COLLABORATEURS </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektCar size={ICONSIZE} />} component={<Link to={LinkVehicule} />}> VEHICULES </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektBellFill size={ICONSIZE} />} component={<Link to={LinkNotifications} />}> NOTIFICATIONS </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektStar size={ICONSIZE} />} component={<Link to={LinkSinistre} />}> SINISTRES </StyledMenuItem>

                    <StyledMenuItem icon={<CodeNektDocument size={ICONSIZE} />} component={<Link to={LinkCartes} />} > CARTES & BADGES </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektEuro size={ICONSIZE} />} component={<Link to={LinkTCO} />} > TCO </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektLeaf size={ICONSIZE} />} disabled> CONDUITE </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektMap size={ICONSIZE} />} disabled> GEOLOCALISATION </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektHexagons size={ICONSIZE} />} component={<Link to={LinkServices} />}> SERVICES </StyledMenuItem>

                    <StyledMenuItem icon={<CodeNektQuestion size={ICONSIZE} />}disabled> AIDE </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektSettings size={ICONSIZE} />} component={<Link to={LinkSettings} />}> PARAMETRES </StyledMenuItem>
                    <StyledMenuItem icon={<CodeNektSignOut size={ICONSIZE} />} component={<Link to={LinkSignout} />}> DECONNEXION </StyledMenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default CodeNektSidePanel;