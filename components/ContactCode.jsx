import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://www.JamesAvakian.com" target="_blank" rel="noopener">
          JamesAvakian.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a href="mailto:javakian1@gmail.com" target="_blank" rel="noopener">
          javakian1@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/javakian" target="_blank" rel="noopener">
          javakian
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/james-l-avakian-13500713/"
          target="_blank"
          rel="noopener"
        >
          James L. Avakian
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a href="https://twitter.com/javakian" target="_blank" rel="noopener">
          @javakian
        </a>
        ;
      </p>

      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;pinterest:{' '}
        <a
          href="https://www.pinterest.com/jamesavakian/_saved/"
          target="_blank"
          rel="noopener"
        >
          James Avakian
        </a>
        ;
      </p>
    </div>
  );
};

export default ContactCode;
