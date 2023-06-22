import React from 'react';
import { useDispatch } from 'react-redux';

import Logo from "../../assets/svg/logo/logo_fondOrange.svg";
import CodenektButton from "../../Components/CodeNektButton";

const SignoutButton = (props) => {
    return (
        <CodenektButton white
            onClick = {props.onClick}
            title = "Se déconnecter"
            width = "100%"
        />
    );
}

const SignoutForm = (props) => {

    const dispatch = useDispatch();
    const Logout = () => {
        dispatch({ type: 'LOGOUT'});
    }

    return (
        <div style={{
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <SignoutButton onClick={Logout} />
        </div>
    );
}

const Signout = (props) => {
    return (
        <div style={{
            alignContent:"center",
            alignItems:"center",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: "auto",
            textAlign: 'center',
            width: "100%",
        }}>
            <div className='CodeNekt__logo'>
                <img src={Logo} alt='' style={{width: "20rem"}} />
                <SignoutForm />
            </div>
        </div>
    );
}

export default Signout;