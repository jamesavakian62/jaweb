import Link from 'next/link';

function NavMyself() {
  return (
    <>
      <div className="links">
        <Link href="/Likes" className="linksItem">
          <p> Likes /</p>
        </Link>

        <Link href="/Sislikes" className="linksItem">
          <p>. Dislikes /</p>
        </Link>

        <Link href="/PhotoAlbum" className="linksItem">
          <p>. Photo Album, Things And Places </p>
        </Link>
      </div>
    </>
  );
}
export default NavMyself;
