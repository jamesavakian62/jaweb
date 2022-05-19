import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavProducts from '../components/NavMenu/NavProducts';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <NavProducts />

      <br />
      <h1>Products Section</h1>
      <br />
      <h2> eCommerce Software </h2>
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
