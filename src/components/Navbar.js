function Navbar({ image }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div>
          <a href="#">
            <img
              alt="hero image"
              src={image}
              width="75%"
              style={{ borderRadius: "8px", boxShadow: "1px 3px 1px cyan" }}
            />
          </a>

          <div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Skills</a>
                <a className="navbar-item">Projects</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Contact</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">LinkedIn</a>
                    <a className="navbar-item">Twitter</a>
                    <a className="navbar-item">Git</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Email me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
