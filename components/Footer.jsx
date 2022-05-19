import Link from 'next/link';
//Import Styles

const Footer = () => {
  return (
    <>
      <div className="navbarRight">
        <div className="links">
          {/* <Link
            href=" https://www.facebook.com/james.avakian.98"
            className="linksItem"
          >
            <img
              src="facebook.png"
              alt="Facebook"
              style="width:42px;height:42px;"
            />
          </Link> */}
          <Link href="/intro" className="linksItem">
            <a> Intro </a>
          </Link>
          <Link href="/software" className="linksItem">
            <a> Software </a>
          </Link>
          <Link href="/products" className="linksItem">
            <a> Products </a>
          </Link>
          <Link href="/myself" className="linksItem">
            <a> Myself </a>
          </Link>
          <Link href="/Contact" className="linksItem">
            <a> Contact Me </a>
          </Link>
        </div>
      </div>
      <br />
      <div className="navbarRight">
        <div className="links">
          <Link href="/terms" className="linksItem">
            <a> Terms Of Use </a>
          </Link>
          <Link href="/privacy" className="linksItem">
            <a> Privacy Policy </a>
          </Link>
          <Link href="/content" className="linksItem">
            <a> Content Policy </a>
          </Link>
        </div>
      </div>
      <br /> <br /> <br />
      <div className="footertext">
        <p>Disclaimer</p>
        <br />
        <p>
          Optical Automation, name text and artwork logo are registered with the
        </p>
        <p>
          United States Patent and Trademark office and are corporate prorperty
        </p>
        <p>owned by Optical Automation Incorporated.</p>
        <br />
        <div className="copyrightText">
          <p>
            &copy;2022 James L. Avakian, Optical Automation, LLC. All rights
            reserved.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
