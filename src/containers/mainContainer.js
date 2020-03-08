import React from 'react';
import GoogleLogin from '../components/googleLogin'
import GoogleLogout from '../components/googleLogout';

class Main extends React.Component {
    state = {
        user: false
    }
    setUser = (user) =>{
        console.log("userinfo",user)
        this.setState({user})
    }

    render() {
        return (
            <div className="App">
                <div>
                    {this.state.user ? <GoogleLogout /> : <GoogleLogin setUser={()=>this.setUser()}/>}
                    <GoogleLogout/>
                </div>
            </div>
        );
    }
}

export default Main;
