import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (<>
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
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

              {!isAuthenticated ? (
                <>
                  <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                  <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
                </>
              ) : (
                <a
                  className="btn btn-dark py-0 d-none d-lg-inline-block"
                  onClick={(e) => { e.preventDefault(); logout(); navigate('/'); }}
                >
                  Logout
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  </>);
}
export default Header
