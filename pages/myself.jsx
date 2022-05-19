import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
// import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavMyself from '../components/NavMenu/NavMyself';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <NavMyself />
      <br />
      <br />
      <h1>Myself Section</h1>
      <br />
      <h2> Myself Software </h2>
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
