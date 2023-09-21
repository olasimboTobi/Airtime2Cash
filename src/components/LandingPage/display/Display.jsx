import React from "react";
import man from "../../../assets/images/man.png";
import { DisplayStyles } from "./Display.styles";

const Info = () => {
  return (
    <DisplayStyles>
      <div class="grid-container">
        <div class="grid-child1">
          <div className="content">
            <h1>Surplus Airtime? Don't worry we got you covered</h1>
          </div>
          <div className="paragraph">
            <p>
              Now there's no need to worry about having so much airtime than you
              need at the moment.We are here to make life so easy for you.So
              Hurry!
            </p>
          </div>
          <div className="btn-container">
            <button className="btn">
              <a href="/signup">Get Started</a>
            </button>
          </div>
        </div>
        <div class="grid-child ">
          <div className="container">
            <img src={man} alt="man" />
          </div>
        </div>
      </div>
      img
    </DisplayStyles>
  );
};

export default Info;
