import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          The  <span>Company</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact" className="nav-button">
          Let's Talk
        </Link>

      </div>
    </header>
  )
}

export default Navbar