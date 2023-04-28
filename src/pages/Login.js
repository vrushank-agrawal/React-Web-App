import Logo from '../assets/svg/logo/logo_full.svg';
import CodeNektButton from '../Components/CodeNektButton';
import login from '../text/fr/login';

function Login() {
    return (
        <>
          <Logo style={{width: 200, height: 200}} />
          <div style={{ alignItems:'center', marginBottom:60, }}>
          <CodeNektButton
            width={212}
            label={login.createAccount}
            // onPress={() => { this.props.navigation.navigate('CreateAccount') }}
          />
          <CodeNektButton
            width={212}
            label={login.connect}
            // onPress={() => { this.props.navigation.navigate('Connect') }}
          />
          </div>
        </>
    );
}

export default Login;