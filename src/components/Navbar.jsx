import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="logo">J_BLUE</div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? " Dark" : " Light"}
      </button>
    </nav>
  );
}

export default Navbar;
