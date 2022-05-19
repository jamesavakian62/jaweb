//import 'materialize-css/dist/css/materialize.min.css';
import Footer from './Footer';
// import ImgProfile from './avakian1.jpg';
// import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          {/* <img className="activator" src={ImgProfile} alt="James L. Avakian" /> */}
          {/* <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link> */}
        </div>
        <div className="card-content">
          <div className="card-title activator grey-text text-darken-4">
            <h1>
              <b> Software Developer </b>
            </h1>
          </div>
          {/* <p>Full Stack Web Developer</p> */}
          <br />
          <p className="flex-container">
            <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
            <i className="fab fa-twitter grey-text text-darken-4 social_style"></i>
            <i className="fab fa-google-plus-g grey-text text-darken-4 social_style"></i>
            <i className="fab fa-instagram grey-text text-darken-4 social_style"></i>
            <i className="fab fa-pinterest grey-text text-darken-4 social_style"></i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
