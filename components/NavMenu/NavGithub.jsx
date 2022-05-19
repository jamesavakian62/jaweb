import Link from 'next/link';

function NavGithub() {
  return (
    <>
      <div className="links">
        <Link href="http://www.github.com/javakian" className="linksItem">
          <p> Github - javakian /</p>
        </Link>

        <Link href="http://www.github.com/javakian00" className="linksItem">
          <p>. Github - javakian00 /</p>
        </Link>
        <Link href="http://www.github.com/jamesavakian62" className="linksItem">
          <p>. Github - jamesvakian62 </p>
        </Link>
      </div>
    </>
  );
}

export default NavGithub;
