import React from 'react';
import Footer from './Footer';
import './Login.css';
import NavbarGen from './NavbarGen';

function LoginDetails(props) {
    return (
        <div>
            <NavbarGen  loginactive='active'/>

            <div class="container cont">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                  <h3>{props.login} </h3>
                  
                  <div class="form1">
                  <form>
                    <label for="email" style={{marginTop: '20px'}}>{props.joinEmail} </label>
                    <br />
                    <input type="text"  name="email" id="Email" placeholder={props.joinEmailHold} width="160px;" /> 
                    <br />

                    <label for="password"  style={{paddingTop: '15px'}}>{props.joinPass} </label>
                    <br />
                    <input type="password" id="password" placeholder={props.joinPassHold} required />
                      <br />

                    <button id="submit" value="submit" class=" btn btn-primary " style={{marginTop: '13px'}}> Sign in</button>
                  </form>
                </div>
                </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>  
              <br></br>
              <br></br>
              











            <div className=""><Footer  foot='&copy; 2017 KawoLegal. All Rights Reserved!'/></div>
  

        </div>
    )
}

export default LoginDetails;

