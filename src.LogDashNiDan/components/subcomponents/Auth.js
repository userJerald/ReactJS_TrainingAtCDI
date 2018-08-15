import React from 'react';

class Auth extends React.Component{
    render(){
        return(
            <div>{!this.props.isLogged && 'You need to log in to see dashboard'}</div>
        );
    }
}

export default Auth;