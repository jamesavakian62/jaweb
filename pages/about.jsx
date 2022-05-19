import Footer from '../components/Footer';
import NavAbout from '../components/NavMenu/NavAbout';

const AboutPage = () => {
  return (
    <>
      <NavAbout />
      <br />
      <h1>About Me</h1>
      <br />
      <h2>About</h2>
      <br />
      <br />
      <br />
      <br />
      <h4>
        Hello, my name is James L. Avakian. I am an a Front End Developer
        looking to help other companies build user friendly applications.
      </h4>
      <br />
      <br />
      <br />
      <br />
      <h4>My Business Card / Logo</h4>
      <br />
      <br />
      <br />
      <br />
      <h4>Google Map</h4>
      <br />
      <br />
      <br />
      <br />
      <h4>Button to Social Network information!</h4>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
