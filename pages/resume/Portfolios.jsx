import Footer from './Footer';
import React from 'react';
//import 'materialize-css/dist/css/materialize.min.css';

export default function Portfolios() {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="dark-grey-text">
            <h6>
              <b>PORTFOLIO</b>
            </h6>
            <h7>
              <b>James L. Avakian, Optical Automation, LLC</b>
            </h7>
            <br /> <br />
            <p>Portfolio, see Software, website and projects section</p>
            <br />
            <p> Ten websites, hand coded, Full Stack projects </p>
            <p> Thirty - five websites, Wix projects </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
