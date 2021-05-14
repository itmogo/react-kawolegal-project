import React from "react";
import Footer from "./Footer";
import NavbarHome from "./NavbarHome";
import './HomeDetails.css'


function HomeDetails(props) {
  return (
    <div>
      <div
        className="view hm-black-strong back "
        style={{
          backgroundImage: "url(/img/office.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundColor: "rgba(49, 12, 12, 0.76)",
          backgroundBlendMode: "overlay",
        }}
      >
        <NavbarHome homeactive="active" />
      </div>

      <div class="view hm-black-strong">
        <div class="full-bg-img flex-center">
          <div class="container container-flex">
            <div class="col-md-3"></div>

            <div class="col-md-6 text">
              <p>
                <h1>KAWOLEGAL</h1>
              </p>

              <p>
                <h3>
                  A collaborative ecosystem for problem solvers and support for
                  Startups.
                </h3>
              </p>

              <br />

              <p>
                <a href="index-register.html">
                  <button class="btn btn-info btn-lg text-btn">
                    Register Now!
                  </button>
                </a>
              </p>
            </div>

            <div class="col-md-3"></div>
          </div>
        </div>
      </div>

       <div className=""><Footer  foot='&copy; 2017 KawoLegal. All Rights Reserved!'/></div>
    </div>
  );
}

export default HomeDetails;
