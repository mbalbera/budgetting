import React from 'react';
import { GoogleLogin } from 'react-google-login';


const login = (props) => {
    const responseGoogle = (response) => {
        console.log('full resp', response);
        console.log('profile resp', response.profileObj);
        const user = response.profileObj;
        if (user){
            props.setUser(user)
        }
    }

    return(
        <GoogleLogin
            clientId="604349755662-rrc8f292d604d07igf2e20u54mjpug8i.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}
export default login

