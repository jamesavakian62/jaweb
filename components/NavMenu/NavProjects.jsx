import Link from 'next/link';

function NavProjects() {
  return (
    <>
      <div className="links">
        <Link href="/projects" className="linksItem">
          <p> Projects /</p>
        </Link>

        <Link href="/videos" className="linksItem">
          <p>. Product Videos </p>
        </Link>
      </div>
    </>
  );
}
export default NavProjects;
