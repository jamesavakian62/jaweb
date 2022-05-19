import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <div className="links1">
        <Link href="/terms" className="linksItem">
          <a> Terms Of Use </a>
        </Link>
        <Link href="/privacy" className="linksItem">
          <a> Privacy Policy </a>
        </Link>
        <Link href="/content1" className="linksItem">
          <a> Content Policy </a>
        </Link>
        <Link href="/logo" className="linksItem">
          <a> Logos </a>
        </Link>
        <Link href="/content1" className="linksItem">
          <a> Product Videos </a>
        </Link>
      </div>
      <br />
      <h1>Legal Section</h1>
      <br />
      <h2> Logo Company Designs </h2>
      <br />
      <br />
      <h2>Company Logo, Text, Optical Automation, LLC</h2>
      <img src="" alt="Optical Automation Logo" />
      <br />
      <h2>Company Logo, Text, Optical Automation, LLC</h2>
      <img src="optical.png" alt="Optical Automation Logo" />
      <br />
      <h2>Company Logo, ShopperLady, Optical Automation, LLC</h2>
      <h1 className="trade">Optical Automation</h1>
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
