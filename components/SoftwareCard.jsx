import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const SoftwareCard = ({ software }) => {
  return (
    <div className={styles.card}>
      <Image
        src={software.image}
        height={300}
        width={600}
        alt={software.name}
      />
      <div className={styles.content}>
        <h3>{software.name}</h3>
        <p>{software.description}</p>
        <div className={styles.tags}>
          {software.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {software.source_code && (
            <a
              href={software.source_code}
              target="_blank"
              rel="noopener"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={software.demo}
            target="_blank"
            rel="noopener"
            className={styles.underline}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
