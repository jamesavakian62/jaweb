import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="James L. Avakian is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="James Website Domains, James L. Avakian, Jim, web developer, James web developer, Jim developer, mern stack, MERN, React.JS, NEXT.NS,.portfolio."
      />
      <meta
        name="keywords"
        content=" James L. Avakian, Full Stack Website Developer, Optical Automation, ShopperLady, MyOneUniverse, James web developer, Jim developer, mern stack, MERN, React.JS, NEXT.NS,.portfolio."
      />
      <meta property="og:title" content="James L. Avakian's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'James L. Avakian', // was Nitin Ranganath
};
