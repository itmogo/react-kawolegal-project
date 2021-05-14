import React from 'react';
import LoginDetails from '../components/LoginDetails';

function Login(props) {
    return (
        <div>
            <LoginDetails
            
            login="Already a Member? Login to add your Startup." 
                
            joinEmail="Email Address"
            joinEmailHold=" Email"

            joinPass="Passsword"
            joinPassHold="Passsword"     
        

            
            />
        </div>
    )
}

export default Login
