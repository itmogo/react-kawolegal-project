import React from 'react';
import './Startups.css';
import Footer from './Footer';

import NavbarGen from './NavbarGen';

function StartupsDetails(props) {
    return (
        <div>
            <NavbarGen  startupsactive ='active' />

            <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className=" input-group search">
              <input
                type="text"
                className="form-control"
                name="query"
                placeholder={props.searchbar}
                id="Search"
              />
              <div className="input-group-btn">
                <button className="btn btn-primary" type="search">
                  <span className="glyphicon glyphicon-search icon">
                    {" "}
                    {props.search}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="container">
        <div class="row margin-bottom">
          <div class="media">
            <div class="media-left" style={{paddingLeft: "90px"}}>
              <a href="#">
                <img
                  class="media-object"
                  src={props.tutimg}
                  alt="tutahub"
                  class="img-responsible"
                  style={{border: '0.5px solid #ccc',
                          marginTop: '10px'}} />
              </a>
            </div>
            <div class="media-body" style={{paddingLeft: "70px"}}>
              <h4 class="media-heading">{props.tut} </h4>
              <p> {props.tutdetails} </p>
              <button> {props.tutsee} </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="media">
            <div class="media-left" style={{paddingLeft: "90px"}}>
              <a href="#">
                <img
                  class="media-object"
                  src={props.andimg}
                  alt="andhub"
                  class="img-responsible"
                  style={{border: '0.5px solid #ccc',
                         marginTop: '10px'}} />
              </a>
            </div>
            <div class="media-body" style={{paddingLeft: "70px"}}>
              <h4 class="media-heading">{props.and} </h4>
              <p> {props.anddetails} </p>
              <button>{props.andsee} </button>
            </div>
          </div>
        </div>
        <hr />

        <div class="row">
          <div class="media">
            <div class="media-left" style={{paddingLeft: "90px"}}>
              <a href="#">
                <img
                  class="media-object"
                  src={props.thinkimg}
                  alt="tutahub"
                  class="img-responsible"
                  style={{border: '0.5px solid #ccc',
                           marginTop: '10px'}} />
              </a>
            </div>
            <div class="media-body" style={{paddingLeft: "70px"}}>
              <h4 class="media-heading">{props.think}</h4>
              <p> {props.thinkdetails}
                </p>
              <button>{props.thinksee}</button>
            </div>
          </div>
        </div>
        <hr />

        <div class="row">
          <div class="media">
            <div class="media-left" style={{paddingLeft: "90px"}}>
              <a href="#">
                <img
                  class="media-object"
                  src= {props.slateimg}
                  alt="tutahub"
                  class="img-responsible"
                  style={{border: '0.5px solid #ccc',
                         marginTop: '10px'}} />
              </a>
            </div>
            <div class="media-body" style={{paddingLeft: "70px"}}>
              <h4 class="media-heading">{props.slate} </h4>
              <p> {props.slatedetails}</p>
                <button>{props.slatesee} </button>
              </div>
            </div>
          </div>
          <hr />

          <div class="row">
            <div class="media">
              <div class="media-left" style={{paddingLeft: "90px"}}>
                <a href="#">
                  <img
                    class="media-object"
                    src={props.sleekimg}
                    alt="tutahub"
                    class="img-responsible"
                    style={{border: '0.5px solid #ccc',
                               marginTop: '10px'}}
                  />
                </a>
              </div>
              <div class="media-body" style={{paddingLeft: "70px"}}>
                <h4 class="media-heading">{props.sleek} </h4>
                <p>{props.sleekdetails}
                  </p>
                <button>see full details</button>
              </div>
            </div>
          </div>    
        
      </div>


            
        

   <div className=""><Footer  foot='&copy; 2017 KawoLegal. All Rights Reserved!'/></div>
   </div>

    );
}

export default StartupsDetails;
