import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <div className="links">
        <Link href="/" className="linksItem">
          ( Home /
        </Link>

        <Link href="/software" className="linksItem">
          Software /
        </Link>
        <Link href="/products" className="linksItem">
          Products /
        </Link>

        <Link href="/myself" className="linksItem">
          Myself /
        </Link>
        <Link href="/roadmap" className="linksItem">
          Map )
        </Link>
      </div>
      <br />
      <h1>Legal Section</h1>
      <br />
      <h2> Video Software </h2>
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
