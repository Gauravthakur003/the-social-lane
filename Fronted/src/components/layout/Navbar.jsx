import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          aria-label="The Social Lane Home"
          className="navbar-brand"
        >
          <div className="navbar-logo-mark">
            <span>S</span>
          </div>

          <div className="navbar-logo-text">
            <strong>THE SOCIAL</strong>
            <span>LANE</span>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="navbar-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar-link ${
                  isActive
                    ? "navbar-link-active"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>

                  {isActive && (
                    <span className="navbar-link-dot" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* =================================================
            CTA
        ================================================= */}

        <Link
          to="/contact"
          className="navbar-cta"
        >
          <span>Let's Talk</span>

          <span className="navbar-cta-arrow">
            ↗
          </span>
        </Link>

        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setMobileOpen(
              (current) => !current
            )
          }
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className={`navbar-menu ${
            mobileOpen
              ? "navbar-menu-open"
              : ""
          }`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`navbar-mobile ${
          mobileOpen
            ? "navbar-mobile-open"
            : ""
        }`}
      >
        <nav
          className="navbar-mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `navbar-mobile-link ${
                  isActive
                    ? "navbar-mobile-link-active"
                    : ""
                }`
              }
            >
              <span className="navbar-mobile-number">
                0{index + 1}
              </span>

              <span>
                {item.name}
              </span>

              <span className="navbar-mobile-arrow">
                ↗
              </span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="navbar-mobile-cta"
          >
            <span>Let's Talk</span>

            <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;