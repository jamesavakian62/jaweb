import Illustration from '../components/Illustration';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}></div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <div className={styles.name}>
              <p>James L. Avakian, ET</p>
              <p> Software Developer </p>
              {/* // ? : responsive , no buttons if large, med or medAndSmall
              //       bring buttons back */}
              <div className={styles.medAndSmall}>
                {/* <Link href="/IntroVideo">
                  <button className={styles.outlined}>Video</button>
                </Link> */}
                <Link href="/intro">
                  <button className={styles.outlined}>Intro</button>
                </Link>
                <Link href="/software">
                  <button className={styles.outlined}>Software</button>
                </Link>
                <Link href="/projects">
                  <button className={styles.outlined}>Products</button>
                </Link>
                <Link href="/comp">
                  <button className={styles.outlined}>Components</button>
                </Link>
                <Link href="/myself">
                  <button className={styles.outlined}>Myself</button>
                </Link>
                <Link href="/resume/Home">
                  <button className={styles.outlined}>Resume</button>
                </Link>
                <Link href="/contact">
                  <button className={styles.outlined}>Contact Me</button>
                </Link>
              </div>
            </div>
            <Illustration className={styles.illustration} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
