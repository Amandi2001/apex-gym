function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>APEX <span>GYM</span></h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;