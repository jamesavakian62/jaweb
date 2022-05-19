//import 'materialize-css/dist/css/materialize.min.css';

import Footer from './Footer';
import React from 'react';

const About = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <b> ABOUT ME </b>
          </h6>
          <p className="dark-grey-text">
            He develops websites made of React.JS / Next.JS. He integrates and
            supportS HTML, CSS3, and JSX programming. Use of Conditional
            Rendering for Responsive Websites. Login authentication by Firebase
            access. Has Bootstrap, W3CSS, and TailwindCSS expiences for
            computer, tablet, and cellphone display. Experience with api RESTful
            access, JSON, with HTML text display. Has past mobile development
            experiences with C# Xamarin and Swift/UI Xcode. Have a passion for
            end to end software support across development, i.e. computer to
            tablet, to cellphone, to watch computing.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <b> PERSONAL INFO </b>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 5065 Amigo Avenue, Tarzana, CA 91356
              </p>
              <p>
                <strong>Email:</strong> javakian1@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (818) 927-9473
              </p>
              <p>
                <strong>Main Language</strong> - English
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Education</strong> - K to 12, University, graduated
                1986.
              </p>
              <p>
                <strong>Computer Literate</strong> - 1980 - 2022
              </p>
              <p>
                <strong> Website Publshed </strong> - Twenty-five, ten Full
                Stack developments, hand coded.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
