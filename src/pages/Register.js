import React from 'react';
import RegisterDetails from '../components/RegisterDetails';


function Register() {
    return (
        <div>
            <RegisterDetails 
            
            join="Join KawoLegal. Sign up to get your Startup listed now!"

            fname="Full Name"
            fnamehold=" Full Name"

            email="Email address"
            emailhold=" Email"

            pass="Password"
            passhold ="Password"

            passconfirm="Confirm Password"
            confirmhold ="Confirm Password"            
           
                      
            />
        </div>
    )
}

export default Register;
