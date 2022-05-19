import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import '../styles/menu.css';
import '../styles/globals.css';
import '../styles/themes.css';

// import Video from '../componentts/Video';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme')
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`James L. Avakian | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
