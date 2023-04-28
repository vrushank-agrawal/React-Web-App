import { Link } from 'react-router-dom';

// Side Panel Imports
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "../css/CodeNektSidePanel.css"

// Import Icons
import {MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from 'react-icons/md';
import LogoWhite from "../assets/svg/logo/logo_full.svg";

// Import Menu Icons
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoCarSportSharp } from 'react-icons/io5';
import { BsBellFill } from 'react-icons/bs';

import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineEuroCircle } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { GrMap } from 'react-icons/gr';
import { AiOutlineQuestion } from 'react-icons/ai';

import { IoSettings } from 'react-icons/io5';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';

function CodeNektSidePanel(props) {
    const { collapseSidebar, _, collapsed } = useProSidebar();

    return (
        <div id='sidePanel'>
            <Sidebar backgroundColor='ORANGEDARK'
                style={{height: '100vh'}}
            >
                <Menu>
                    <div className='CodeNektSidePanel__close'
                        style={{float: "right"}}
                        onClick={() => collapseSidebar()}
                    >
                        {collapsed  ? <MdKeyboardDoubleArrowRight /> : <MdKeyboardDoubleArrowLeft />}
                    </div>
                    <div className='CodeNektSidePanel__logo'>
                        <img src={LogoWhite} alt=''/>
                    </div>

                    <MenuItem icon={<AiOutlineDashboard />} component={<Link to='/' />}> TABLEAU DE BORD </MenuItem>
                    <MenuItem icon={<BsFillPersonFill />} component={<Link to='/collaborator' />}> COLLABORATEURS </MenuItem>
                    <MenuItem icon={<IoCarSportSharp />} component={<Link to='/vehicles' />}> VEHICULES </MenuItem>
                    <MenuItem icon={<BsBellFill />} component={<Link to='/notifications' />}> NOTIFICATIONS </MenuItem>
                    <MenuItem icon={<FaSignInAlt />} component={<Link to='/claims' />}> SINISTRES </MenuItem>

                    <MenuItem icon={<TiDocumentText />} disabled> CARTES & BADGES </MenuItem>
                    <MenuItem icon={<AiOutlineEuroCircle />} disabled> TCO </MenuItem>
                    <MenuItem icon={<BiLeaf />} disabled> CONDUITE </MenuItem>
                    <MenuItem icon={<GrMap />} disabled> GEOLOCALISATION </MenuItem>
                    <MenuItem icon={<FaSignInAlt />} component={<Link to='/services' />}> SERVICES </MenuItem>

                    <MenuItem icon={<AiOutlineQuestion />}disabled> AIDE </MenuItem>
                    <MenuItem icon={<IoSettings />} component={<Link to='/settings' />}> PARAMETRES </MenuItem>
                    <MenuItem icon={<FaSignOutAlt />} component={<Link to='/signout' />}> DECONNEXION </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default CodeNektSidePanel;