import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.png" alt="namelogo" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
          <Link onClick={closeMenu} to="/" className="navbar--content">
              Home
            </Link>
          </li>
          <li>
          <Link onClick={closeMenu} to="/portfolio" className="navbar--content">
              Portfolio
            </Link>
          </li>
          <li>
          <Link onClick={closeMenu} to="/about" className="navbar--content">
              About Me
            </Link>
          </li>
          <li>
          <Link onClick={closeMenu} to="/Education" className="navbar--content">
              Education
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
