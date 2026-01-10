function Header() {
  return (<>
    <div id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a href="index.html" className="navbar-brand">
            <h2 className="text-white">Hairnic</h2>
          </a>
          <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="product.html" className="nav-item nav-link">Products</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu bg-light mt-2">
                  <a href="feature.html" className="dropdown-item">Features</a>
                  <a href="how-to-use.html" className="dropdown-item">How To Use</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="blog.html" className="dropdown-item">Blog Articles</a>
                  <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="https://htmlcodex.com/downloading/?item=2727" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Buy Pro Version</a>
          </div>
        </nav>
      </div>
    </div>
  </>);
}
export default Header
