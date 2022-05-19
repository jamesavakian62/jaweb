import Footer from '../components/Footer';
// import Link from 'next/link';
import NavSoftware from '../components/NavMenu/NavSoftware';
import SoftwareCard from '../components/SoftwareCard';
import { getSoftwares } from '../api/softwares';
import styles from '../styles/ProjectsPage.module.css';

const SoftwaresPage = ({ softwares }) => {
  return (
    <>
      <NavSoftware />
      <br />
      <h1>Software Section</h1>
      <br />
      <h2> Software </h2>
      <br />
      <br />
      <div className={styles.container}>
        {softwares.map((software) => (
          <SoftwareCard key={software.id} software={software} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const softwares = getSoftwares();

  return {
    props: { title: 'Softwares', softwares },
  };
}

export default SoftwaresPage;
