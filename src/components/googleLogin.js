import React from 'react';
import { GoogleLogin } from 'react-google-login';


const Login = (props) => {
    const responseGoogle = (response) => {
        // console.log('full resp', response);
        // console.log('profile resp', response.profileObj);
        const user = response.profileObj;
        if (user){
            props.setUser(user)
        }
    }

    return(
        <GoogleLogin
            clientId="xxxxxxxxx.apps.googleusercontent.com"
            buttonText="Sign in With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}
export default Login

