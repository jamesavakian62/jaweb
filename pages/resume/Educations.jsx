//import 'materialize-css/dist/css/materialize.min.css';
import Footer from './Footer';
import Link from 'next/link';
import React from 'react';

const Educations = () => {
  return (
    <div>
      <div class="card">
        <div class="card-content">
          <h6>
            <b> EDUCATION </b>
          </h6>

          <table class="striped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Stack Bootcamp, Clever Programmer</td>
                <td>Graduated Jan 2020</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Udemy Tutorials</td>
                <td>Since June 2010</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>Lynda.com, LinkedIn Tutorials</td>
                <td>Since 2000</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Udemy Tutorials</td>
                <td>June 2013</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Windows / MacOs, A+ Certified</td>
                <td>June 2000</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  California Polytechnic State University, San Luis Obispo, CA
                  Electronics Engineering Technology, graduated BSET, 1986
                </td>
                {/* <td>
                  
                </td> */}
                <td>June, 1986</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Educations;
