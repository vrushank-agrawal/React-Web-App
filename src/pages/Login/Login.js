import React from "react";
import { IconButton, TextField } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";

// CodeNekt imports
import Logo from "../../assets/svg/logo/logo_fondOrange.svg";
import CodenektButton from "../../Components/CodeNektButton";
import { CodeNektEye, CodeNektEyeBlocked } from "../../Components/CodeNektIcons";
import { login } from "../../api/modules/User";
import { checkEmail, checkPassword } from "../../utils/checkForms";

const ITEMWIDTH = "80%";

const LoginInput = (props) => {

    const [viewPassword, setViewPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setViewPassword(!viewPassword);
    };

    return (
        <TextField
            label={props.label}
            onChange={props.onChange}
            type={props.pass ? (viewPassword ? 'text' : 'password') : 'text'}
            size="small"
            variant="outlined"
            value={props.value}
            InputProps={props.pass && {
                endAdornment:
                    <IconButton onClick={handleClickShowPassword}>
                        {!viewPassword ? <CodeNektEye /> : <CodeNektEyeBlocked />}
                    </IconButton>,
            }}
            sx={{
                alignSelf: "center",
                backgroundColor: "white",
                borderRadius: 20,
                fontSize: "1rem",
                margin: "0.5rem 0",
                width: ITEMWIDTH,
                '& .MuiOutlinedInput-root fieldset': {
                    border: 'none',
                },
            }}
        />
    );
}

const ConnectButton = (props) => {
    return (
        <CodenektButton white
            onClick = {props.onClick}
            title = "Se connecter"
            width = {ITEMWIDTH}
        />
    );
}

const LoginForm = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const Checklogin = async (user) => {
        const response = await login(user)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: 'LOGIN', data: response.data});
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }

    const InputValidate = () => {
        if (!checkEmail(email)) {
            setError(true);
        } else if (!checkPassword(password)) {
            setError(true);
        } else {
            Checklogin({email: email, password: password})
        }
    }

    return (
        <div style={{
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <LoginInput label="Email" onChange={handleEmailChange} value={email} />
            <LoginInput label="Mot de passe" pass={true} onChange={handlePasswordChange} value={password} />
            <ConnectButton onClick={InputValidate} />
            {error && <p style={{color: "white"}}>Email ou mot de passe incorrect</p>}
        </div>
    );
}

const Login = (props) => {
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
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;