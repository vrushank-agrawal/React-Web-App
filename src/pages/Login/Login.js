import React from "react";
import { IconButton, TextField } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";

// CodeNekt imports
import Logo from "../../assets/svg/logo/logo_fondOrange.svg";
import CodenektButton from "../../Components/CodeNektButton";
import { CodeNektEye, CodeNektEyeBlocked } from "../../Components/CodeNektIcons";
import { login } from "../../api/modules/User";
import { checkEmail, checkPassword } from "../../utils/checkForms";
import { BLACKCN, ORANGEDARK, WHITECN } from "../../utils/colors";
import { Typography } from "@material-ui/core";

const formStyle = {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const LoginInput = (props) => {

    const [viewPassword, setViewPassword] = React.useState(false);
    const handleClickShowPassword = () => { setViewPassword(!viewPassword); };

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
                width: props.width,
                '& .MuiOutlinedInput-root fieldset': {
                    border: 'none',
                },
            }}
        />
    );
}

const ConnectButton = (props) => {
    return (
        <CodenektButton white bold
            color = {ORANGEDARK}
            onClick = {props.onClick}
            title = {props.title}
            width = {props.width}
        />
    );
}

const MotDePasseButton = (props) => {
    return (
        <CodenektButton underline
            color = {BLACKCN}
            onClick = {props.onClick}
            title = "Mot de passe oublié"
            width = {props.width}
        />
    )
}

const MotDePasseReinit = (props) => {

    const ItemWidth = "40%";

    const [email, setEmail] = React.useState('');
    const handleEmailChange = (event) => { setEmail(event.target.value); };

    return (
        <div style={formStyle}>
            <Typography style={{color: WHITECN, margin: "2rem 0"}}>
                Indiquez l'adresse Email associée à votre compte pour générer un nouveau mot de passe
            </Typography>
            <LoginInput label="Email" onChange={handleEmailChange} value={email} width={ItemWidth} />
            <ConnectButton onClick={props.onClick} title={"Générer un nouveau mot de passe"} width={ItemWidth} />
        </div>
    );
}

const LoginForm = (props) => {

    const ItemWidth = "80%";
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();

    const handleEmailChange = (event) => { setEmail(event.target.value);};
    const handlePasswordChange = (event) => { setPassword(event.target.value); };

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
        <div style={formStyle}>
            <LoginInput label="Email" onChange={handleEmailChange} value={email} width={ItemWidth} />
            <LoginInput label="Mot de passe" pass={true} onChange={handlePasswordChange} value={password} width={ItemWidth} />
            {error && <p style={{color: "white"}}>Email ou mot de passe incorrect</p>}
            <ConnectButton onClick={InputValidate} title={"Se connecter"} width={ItemWidth} />
            <MotDePasseButton onClick={props.onClick} width={ItemWidth} />
        </div>
    );
}

const Login = (props) => {

    const [motdepasse, setMotDePasse] = React.useState(false);
    const handleMotDePasse = () => { setMotDePasse(!motdepasse); }

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
                {motdepasse ?
                    <MotDePasseReinit onClick={handleMotDePasse} />
                :
                    <LoginForm onClick={handleMotDePasse} />
                }
            </div>
        </div>
    );
}

export default Login;