import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
            
            <footer className="footer mobi-footer footer-down" > 
            
            
        <div className="container container-footer">
          <div className="row">
            <div className= "col-md-6 foot-txt">
                <ul>
                    <li>{props.foot} </li>
                </ul>              
            </div> 

            <div class="col-md-6 social">

      <ul>
        <li><a href=""><span class="mdi mdi-facebook"></span></a></li>
        <li><a href=""><span class="mdi mdi-twitter"></span></a></li>
        <li><a href=""><span class="mdi mdi-linkedin"></span></a></li>
        <li><a href=""><span class="mdi mdi-instagram"></span></a></li>
      </ul>

    </div>
          </div>
        </div>     

      </footer>  
        </div>
    );
}

export default Footer;
