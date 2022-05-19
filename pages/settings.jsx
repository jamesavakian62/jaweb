import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';
import Footer from '../components/Footer';

const SettingsPage = () => {
  return (
    <>
      <br />
      <h1>Settings Section</h1>
      <br />
      <h2> Settings </h2>
      <br />
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          // icon='/engine.png'
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for editor view"
        />
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant editor theme."
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
