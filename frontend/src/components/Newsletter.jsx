function Newsletter() {
  return (
    <div className="container-fluid newsletter bg-primary py-5 my-5">
      <div className="container py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
          <h1 className="text-white mb-3"><span className="fw-light text-dark">Let's Subscribe</span> The Newsletter</h1>
          <p className="text-white mb-4">Subscribe now to get 30% discount on any of our products</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 wow fadeIn" data-wow-delay="0.5s">
            <div className="position-relative w-100 mt-3 mb-2">
              <input className="form-control w-100 py-4 ps-4 pe-5" type="text" placeholder="Enter Your Email"
                style={{height: '48px'}} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                className="fa fa-paper-plane text-white fs-4"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;