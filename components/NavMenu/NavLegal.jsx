import Link from 'next/link';
// import styles from '../styles/menu.css';

function NavLegal() {
  return (
    <>
      <div className="links">
        <Link href="/content1" className="linksItem">
          <p> Logos /</p>
        </Link>
        <Link href="/content1" className="linksItem">
          <p>. Product Videos /</p>
        </Link>
        <Link href="/terms" className="linksItem">
          <p>. Terms Of Use /</p>
        </Link>
        <Link href="/privacy" className="linksItem">
          <p>. Privacy Policy /</p>
        </Link>
        <Link href="/content1" className="linksItem">
          <p>. Content Policy </p>
        </Link>
      </div>
    </>
  );
}

export default NavLegal;
