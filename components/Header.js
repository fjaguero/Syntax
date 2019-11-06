import Link from "next/link";

const Header = () => (
  <header className="header">
    <Link href="/">
      <a aria-label="In Progress Show">
        <img
          className="header__logo"
          src="/static/logo.jpg"
          alt="In Progress Show Logo"
        />
      </a>
    </Link>
    <div className="title">
      <h2 className="tagline">
        A podcast where we look at how tech companies work from the inside.
      </h2>
    </div>
  </header>
);

export default Header;
