import Footer from '../components/Footer';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { getResumes } from './api/resumes';
import styles from '../styles/ProjectsPage.module.css';

const ResumesPage = ({ resumes }) => {
  return (
    <>
      <div className="links">
        <Link href="/web" className="linksItem">
          ( Websites /
        </Link>

        <Link href="/qr" className="linksItem">
          Qrcode /
        </Link>
        <Link href="/ecomm" className="linksItem">
          eCommerce )
        </Link>
      </div>
      <br />
      <h1>My Resume Section</h1>
      <br />
      {/* <h2> Projects Software </h2>
      <br />
      <br />
      <h1>Web Components</h1>
      <br />
      <h2>Mega Menu</h2>
      <img src="/megamenu.png" width="750px" alt="megamenu"></img> */}
      <br />
      <div className={styles.container}>
        {resumes.map((project) => (
          <ProjectCard key={resume.id} project={project} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const resumes = getResumes();

  return {
    props: { title: 'Resumes', resumes },
  };
}

export default ResumesPage;
