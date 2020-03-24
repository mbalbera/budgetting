import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {


    return(
    <GoogleLogout
        clientId="xxxxxxxxxx.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={()=>props.setUser(false)}
    >
    </GoogleLogout>
    )
}
export default Logout