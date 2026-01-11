import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (<>
    {/* <div id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}

    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link to="/" className="navbar-brand">
            <h2 className="text-white">Hairnic</h2>
          </Link>
          <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/about" className="nav-item nav-link">About</NavLink>
              <NavLink to="/product" className="nav-item nav-link">Products</NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu bg-light mt-2">
                  <Link to="/feature" className="dropdown-item">Features</Link>
                  <Link to="/howtouse" className="dropdown-item">How To Use</Link>
                  <Link to="/testimonal" className="dropdown-item">Testimonial</Link>
                  <Link to="/blog" className="dropdown-item">Blog Articles</Link>
                  <Link to="/404" className="dropdown-item">404 Page</Link>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            <a href="https://htmlcodex.com/downloading/?item=2727" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Buy Pro Version</a>
          </div>
        </nav>
      </div>
    </div>
  </>);
}
export default Header
