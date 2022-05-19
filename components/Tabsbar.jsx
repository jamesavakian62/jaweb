import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="intro.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="software.jsx" path="/software" />
      <Tab icon="/html_icon.svg" filename="products.jsx" path="/products" />
      <Tab icon="/js_icon.svg" filename="projects.jsx" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="comp.jsx" path="/comp" />
      <Tab icon="/markdown_icon.svg" filename="myself.jsx" path="/myself" />
      <Tab icon="/markdown_icon.svg" filename="resume.jsx" path="/resume" />
      <Tab icon="/markdown_icon.svg" filename="legal.jsx" path="/legal" />
      <Tab icon="/js_icon.svg" filename="github.jsx" path="/github" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
    </div>
  );
};

export default Tabsbar;
