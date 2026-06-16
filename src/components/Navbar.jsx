import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🌿</span>
        <span className="brand-name">NatureTrip</span>
      </div>

      <div className="nav-links">
        {[
          { to: "/",        label: "Home"    },
          { to: "/places",  label: "Places"  },
          { to: "/budget",  label: "Budget"  },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${pathname === to ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <Link to="/contact" className="nav-cta">Plan a Trip</Link>
    </nav>
  );
}

export default Navbar;