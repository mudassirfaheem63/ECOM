function HowToUseSection() {
  return (
    <div className="container-fluid how-to-use bg-primary my-5 py-5">
      <div className="container text-white py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
          <h1 className="text-white mb-3"><span className="fw-light text-dark">How To Use Our</span> Natural & Organic
            <span className="fw-light text-dark">Hair Shampoo</span></h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.1s">
            <div className="btn-square rounded-circle border mx-auto mb-4" style={{width: '120px', height: '120px'}}>
              <i className="fa fa-home fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Wash Hair With Water</h5>
            <hr className="w-25 bg-light my-2 mx-auto"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
          </div>
          <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.3s">
            <div className="btn-square rounded-circle border mx-auto mb-4" style={{width: '120px', height: '120px'}}>
              <i className="fa fa-home fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Apply Shampoo On Hair</h5>
            <hr className="w-25 bg-light my-2 mx-auto"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
          </div>
          <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.5s">
            <div className="btn-square rounded-circle border mx-auto mb-4" style={{width: '120px', height: '120px'}}>
              <i className="fa fa-home fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Wait 5 Mins And Wash</h5>
            <hr className="w-25 bg-light my-2 mx-auto"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseSection;