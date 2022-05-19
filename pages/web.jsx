import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';

const ProjectsPage = ({ projects }) => {
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

        <br />
      </div>
      <br />
      <h1>Software Section</h1>
      <br />
      <h2> Web Software </h2>
      <br />
      <br />
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
