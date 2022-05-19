import Link from 'next/link';

function NavProducts() {
  return (
    <>
      <div className="links">
        <Link href="/client" className="linksItem">
          <p> Client Websites /</p>
        </Link>
        <Link href="/qr" className="linksItem">
          <p>. QRcode / </p>
        </Link>
        <Link href="/greats" className="linksItem">
          <p>. YouTube Greatest /</p>
        </Link>
        <Link href="/shopperlady" className="linksItem">
          <p>. ShopperLady dbs /</p>
        </Link>
        <Link href="/tech" className="linksItem">
          <p>. Technology And Times /</p>
        </Link>
      </div>
    </>
  );
}
export default NavProducts;
