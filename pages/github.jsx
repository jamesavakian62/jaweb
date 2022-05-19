import Footer from '../components/Footer';
import GitHubCalendar from 'react-github-calendar';
import Image from 'next/image';
import NavGithub from '../components/NavMenu/NavGithub';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <NavGithub />
      <br />
      <h1>GitHub Section</h1>
      <br />
      <h2>Github.com - Latest Updated Repositories</h2>
      <br />
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar username="javakian" theme={theme} hideColorLegend />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(`https://api.github.com/users/javakian`);
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/Javakian/repos?sort=created_at&per_page=10`
  );
  const repos = await repoRes.json();

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;