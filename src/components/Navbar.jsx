import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/places">Places</Link>
      <Link to="/budget">Budget</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;