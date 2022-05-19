import Link from 'next/link';

function NavContact() {
  return (
    <>
      <div className="links1">
        <Link href="/about" className="linksItem">
          <p> About Me </p>
        </Link>
      </div>
    </>
  );
}

export default NavContact;
