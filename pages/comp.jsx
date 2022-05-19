import Footer from '../components/Footer';
// import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import NavMyself from '../components/NavMenu/NavMyself';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <NavMyself />
      <br />
      <br />
      <h1>Software Components Section</h1>
      <br />
      <h2> Text MegaMenu - Next.JS / TailWindCSS </h2>
      <br />
      <br />
      <h2> GUI MegaMenu - Next.JS / TailWindCSS </h2>
      <br />

      <div className="container">
        {/* <div className={styles.container}> */}
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
    props: { title: 'Myself', projects },
  };
}

export default ProjectsPage;
