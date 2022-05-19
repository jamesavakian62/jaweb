import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import NavProducts from '../components/NavMenu/NavProjects';
import Footer from '../components/Footer';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <NavProducts />
      <br />
      <h1>Products Section</h1>
      <br />
      <h2> YouTube Greats Software </h2>
      <br />
      <h2> Jazz Greats / Rock Greats / Comedians / Actors / Actresses </h2>
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
