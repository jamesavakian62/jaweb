//import 'materialize-css/dist/css/materialize.min.css';
import Footer from './Footer';
import React from 'react';

export default function Skills() {
  return (
    <div className="card">
      <div className="card-content">
        <h6>
          <b> PROFESSIONAL SKILLS </b>
        </h6>
        <div className="row mt-top">
          <div className="col s6">
            <p>REACT.JS / CSS3 / JSX-HTML</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>NEXT.JS / TAILWINDCSS </p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <p>MONGODB / EXPRESS / REACT.JS / NODE.JS</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>XAMARIN C#/ IOS / ANDRIOD</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <p>SWIFT/UI IOS</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>PHP / MYSQL</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* /// */}
      <div className="card-content">
        <h6>
          <strong>ADDITIONAL SKILLS</strong>
        </h6>
        <div className="row mt-top">
          <div className="col s6">
            <p> Windows XP / MacOs, A+ Certified, 2000</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>MICROSOFT OFFICE, Word, PowerPoint, Excel</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="col s6">
            <p>GITHUB, javakian, jamesavakian62</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <p>MATERIALIZE-CSS / MATERIALUI / BULMA</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
