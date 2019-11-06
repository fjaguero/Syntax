import Link from "next/link";
import Subscribe from "./Subscribe";

const Footer = () => (
  <footer className="bottom">
    <Subscribe />
    <p>
      Website source is on{" "}
      <a
        href="https://github.com/fjaguero/syntax"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
