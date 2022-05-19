import AccountIcon from './icons/AccountIcon';
import CodeIcon from './icons/CodeIcon';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import MailIcon from './icons/MailIcon';
import PencilIcon from './icons/PencilIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <Link href="/">
            <div
              className={`${styles.iconContainer} ${
                router.pathname === '/' && styles.active
              }`}
            >
              <FilesIcon
                fill={
                  router.pathname === '/'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>

          <Link href="/products">
            <div
              className={`${styles.iconContainer} ${
                router.pathname === '/products' && styles.active
              }`}
            >
              <CodeIcon
                fill={
                  router.pathname === '/products'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>

          <Link href="/projects">
            <div
              className={`${styles.iconContainer} ${
                router.pathname === '/projects' && styles.active
              }`}
            >
              <CodeIcon
                fill={
                  router.pathname === '/projects'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
          <Link href="/comp">
            <div
              className={`${styles.iconContainer} ${
                router.pathname === '/components' && styles.active
              }`}
            >
              <CodeIcon
                fill={
                  router.pathname === '/components'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>

          <Link href="/github">
            <div
              className={`${styles.iconContainer} ${
                router.pathname === '/github' && styles.active
              }`}
            >
              <GithubIcon
                fill={
                  router.pathname === '/github'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>

          <div className={styles.sidebarBottom}>
            <div className={styles.iconContainer}>
              <Link href="/myself">
                <AccountIcon
                  fill={
                    router.pathname === '/myself'
                      ? 'rgb(225, 228, 232)'
                      : 'rgb(106, 115, 125)'
                  }
                  className={styles.icon}
                />
              </Link>
            </div>
            <div className={styles.sidebarBottom}>
              <div className={styles.iconContainer}>
                <Link href="/resume">
                  <AccountIcon
                    fill={
                      router.pathname === '/resume'
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </Link>
              </div>
              <Link href="/legal">
                <div
                  className={`${styles.iconContainer} ${
                    router.pathname === '/legal' && styles.active
                  }`}
                >
                  <MailIcon
                    fill={
                      router.pathname === '/legal'
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </div>
              </Link>

              <Link href="/resume">
                <div
                  className={`${styles.iconContainer} ${
                    router.pathname === '/resume' && styles.active
                  }`}
                >
                  <MailIcon
                    fill={
                      router.pathname === '/resume'
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </div>
              </Link>

              <Link href="/contact">
                <div
                  className={`${styles.iconContainer} ${
                    router.pathname === '/contact' && styles.active
                  }`}
                >
                  <MailIcon
                    fill={
                      router.pathname === '/contact'
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </div>
              </Link>

              <div className={styles.iconContainer}>
                <Link href="/settings">
                  <SettingsIcon
                    fill={
                      router.pathname === '/settings'
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
