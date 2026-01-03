import { NavLink } from "react-router-dom";

export default function Header({ setTheme }) {
  return (
    <header className="header">
      <div className="logo">
        Gritsa<span>Technologies</span>
      </div>

      <nav className="navbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="theme-buttons">
        <button onClick={() => setTheme("light")}>🔆</button>
        <button onClick={() => setTheme("dark")}>🌙</button>
        <button onClick={() => setTheme("bright")}>✨</button>
      </div>
    </header>
  );
}
