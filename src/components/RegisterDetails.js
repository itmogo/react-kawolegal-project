import React from 'react';
import NavbarGen from './NavbarGen';
import './Register.css';
import Footer from './Footer';

function RegisterDetails(props) {
    return (
        <div>
            <NavbarGen registeractive='active'/>

            
      <div className="container cont">
                <div className="row">
                  <h3>{props.join} </h3>
                  
                  <div className="form1">
                  <form>
                    <label for="fname" style={{marginTop: '20px'}}> {props.fname} </label>
                    <br/>
                    <input type="text"  name="fname" id="fname" placeholder={props.fnamehold} width="160px;" required /> 
                    <br/>

                    <label for="email" style={{marginTop: '20px'}}>{props.email} </label>
                    <br/>
                    <input type="text"  name="email" id="Email" placeholder={props.emailhold} width="160px;" required /> 
                    <br/>

                    <label for="password"  style={{paddingTop: '15px'}}>{props.pass} </label><br/>
                    <input type="password" id="password" placeholder={props.passhold} required /> 
                    <br/>

                    <label for="confirm password"  style={{paddingTop: '15px'}}>{props.passconfirm} </label> 
                    <br/>
                    <input type="password" id="confirm password" placeholder={props.confirmhold} required/>
                     <br/>

                    <button id="submit"  value="submit" className=" btn btn-primary " style={{marginTop: '13px'}}> Sign in</button>
                  </form>
                </div>
                </div>
              </div>
              <br/><br/> <br/>

              <div className=""><Footer  foot='&copy; 2017 KawoLegal. All Rights Reserved!'/></div>



        </div>
    )
}

export default RegisterDetails;
