import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavSoftware from '../components/NavMenu/NavSoftware';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <NavSoftware />
      <br />
      <h1>Technology Section</h1>
      <br />
      <h2> React.JS Software </h2>
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
