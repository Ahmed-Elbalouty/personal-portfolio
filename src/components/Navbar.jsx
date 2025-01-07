import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link is the Home page

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
    setIsMenuOpen(false); // Close the menu

    if (link === '/') {
      // Scroll to the top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Remove the hash from the URL (if it's there) without reloading the page
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
  };

  return (
    <nav className="py-4 navbar navbar-expand-lg fixed-top navbar-dark navbar-custom-colors">
      <div className="px-4 container-fluid px-lg-5">
        <a className="navbar-brand" href="/" onClick={(e) => {
          e.preventDefault();
          handleLinkClick('/');
        }}>
          &lt; A-Abdelsalam /&gt;
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`flex-grow-0 text-center collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="mt-4 navbar-nav mt-md-0">
            <li className="nav-item">
              <a
                className={`px-3 py-4 nav-link hoverd-link py-lg-2 ${activeLink === '/' ? 'active' : ''}`}
                aria-current="page"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`px-3 py-4 nav-link hoverd-link py-lg-2 ${activeLink === '#about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleLinkClick('#about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`px-3 py-4 nav-link hoverd-link py-lg-2 ${activeLink === '#projects' ? 'active' : ''}`}
                href="#projects"
                onClick={() => handleLinkClick('#projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`px-3 py-4 nav-link hoverd-link py-lg-2 ${activeLink === '#contact' ? 'active' : ''}`}
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
