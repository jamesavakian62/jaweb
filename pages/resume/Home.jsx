import About from './About';
import Educations from './Educations';
import Experiences from './Experiences';
import Footer from './Footer';
import Navbar from './Navbar';
import Portfolios from './Portfolios';
import Profile from './Profile';
import React from 'react';
import Skills from './Skills';

//import 'materialize-css/dist/css/materialize.min.css';

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m3">
            <Profile />
          </div>
          <div className="col s12 m9">
            <About />
            <Skills />
            <Experiences />
            <Educations />
            <Portfolios />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
