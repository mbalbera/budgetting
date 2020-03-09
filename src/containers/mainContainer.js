import React from 'react';
import GoogleLogin from '../components/googleLogin'
import GoogleLogout from '../components/googleLogout';
import LoggedIn from '../components/loggedIn'

class Main extends React.Component {
    state = {
        user: false,
        budget: 0
    }
    setUser = (user) =>{
        // console.log("userinfo",user)
        this.setState({user})
    }
    
   

    render() {
        console.log('user',this.state.user)
        return (
            <div className="App">
                <div>
                    {this.state.user ? <div> <GoogleLogout /> </div> : <div><GoogleLogin setUser={this.setUser} /></div>}
                    {this.state.user ? <LoggedIn user={this.state.user}/> : null}
                </div>
            </div>
        );
    }
}

export default Main;
