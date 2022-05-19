import ChevronRight from '../icons/ChevronRight';
// import ChevronRight from '../components/icons/ChevronRight';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Explorer.module.css';
import { useState } from 'react';

const ProjectsExplorer = () => {
  const [portfolioOpen1, setPortfolioOpen1] = useState(true);
  const [portfolioOpen2, setPortfolioOpen2] = useState(true);
  const [portfolioOpen3, setPortfolioOpen3] = useState(true);
  const [portfolioOpen4, setPortfolioOpen4] = useState(true);
  const [portfolioOpen5, setPortfolioOpen5] = useState(true);
  const [portfolioOpen6, setPortfolioOpen6] = useState(true);
  const [portfolioOpen7, setPortfolioOpen7] = useState(true);
  const [portfolioOpen8, setPortfolioOpen8] = useState(true);

  return (
    <div className={styles.explorer}>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen1}
          onChange={() => setPortfolioOpen1(!portfolioOpen1)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className="fas fa-chevron-right"
            style={portfolioOpen1 ? { transform: 'rotate(90deg)' } : {}}
          />
          Projects
        </label>
        <div
          className={styles.files}
          style={portfolioOpen1 ? { display: 'block' } : { display: 'none' }}
        >
          <Link href="/">
            <div className={styles.file}>
              <Image
                src="/react_icon.svg"
                alt="React Icon"
                height={18}
                width={18}
              />{' '}
              <p>home.jsx</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.file}>
              <Image
                src="/html_icon.svg"
                alt="HTML Icon"
                height={18}
                width={18}
              />{' '}
              <p>about.html</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.file}>
              <Image
                src="/css_icon.svg"
                alt="CSS Icon"
                height={18}
                width={18}
              />{' '}
              <p>contact.css</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className={styles.file}>
              <Image
                src="/js_icon.svg"
                alt="JavaScript Icon"
                height={18}
                width={18}
              />{' '}
              <p>projects.js</p>
            </div>
          </Link>
          <Link href="/github">
            <div className={styles.file}>
              <Image
                src="/markdown_icon.svg"
                alt="Markdown Icon"
                height={18}
                width={18}
              />{' '}
              <p>github.md</p>
            </div>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectsExplorer;
