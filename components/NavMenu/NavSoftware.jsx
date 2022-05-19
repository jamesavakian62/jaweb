import Link from 'next/link';

function NavSoftware() {
  return (
    <>
      <div className="links">
        <Link href="/software" className="linksItem">
          <p> Websites /</p>
        </Link>

        <Link href="/react" className="linksItem">
          <p>. React Components /</p>
        </Link>
        <Link href="/tech" className="linksItem">
          <p>. Technologies </p>
        </Link>

        {/* <Link href="/myself" className="linksItem">
          <a> Myself </a>
        </Link>
        <Link href="/roadmap" className="linksItem">
          <a> Map </a>
        </Link> */}
      </div>
    </>
  );
}

export default NavSoftware;
