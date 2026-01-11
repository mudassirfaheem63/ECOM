function Home() {
  return (
    <>
    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h3 className="fw-light text-white animated slideInRight">Natural & Organic</h3>
                    <h1 className="display-4 text-white animated slideInRight">Hair <span className="fw-light text-dark">Shampoo</span> For Healthy Hair</h1>
                    <p className="text-white mb-4 animated slideInRight">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et
                        magnis dis parturient montes.</p>
                    <a href="" className="btn btn-dark py-2 px-4 me-3 animated slideInRight">Shop Now</a>
                    <a href="" className="btn btn-outline-dark py-2 px-4 animated slideInRight">Contact Us</a>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid animated pulse infinite" src="img/shampoo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">100% Natural</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">Anti Hair Fall</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-times fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">Hypoallergenic</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src="img/shampoo-1.png"/>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="text-primary mb-4">Healthy Hair <span className="fw-light text-dark">Is A Symbol Of Our
                            Beauty</span></h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                    <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                        labore lorem sit. Sanctus clita duo justo et tempor.</p>
                    <a className="btn btn-primary py-2 px-4" href="">Shop Now</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid deal bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src="img/shampoo-2.png"/>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-white text-center p-4">
                        <div className="border p-4">
                            <p className="mb-2">Natural & Organic Shampoo</p>
                            <h2 className="fw-bold text-uppercase mb-4">Deals of the Day</h2>
                            <h1 className="display-4 text-primary mb-4">$99.99</h1>
                            <h5>Fresh Organic Shampoo</h5>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Etiam feugiat rutrum lectus sed auctor.</p>
                            <div className="row g-0 cdt mb-4">
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-days"></h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-hours"></h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-minutes"></h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-seconds"></h1>
                                </div>
                            </div>
                            <a className="btn btn-primary py-2 px-4" href="">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Best Benefits Of Our</span> Natural Hair
                    Shampoo</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4 align-items-center">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Natural & Organic</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Anti Hair Fall</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Anti-dandruff</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src="img/shampoo.png"/>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Internal Side Effect</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Skin Irritation</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: '80px', height: '80px'}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Artificial Smell</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="product-item text-center border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/product-1.png" alt=""/>
                        <div className="mb-2">
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" className="h6 d-inline-block mb-2">Hair Shining Shampoo</a>
                        <h5 className="text-primary mb-3">$99.99</h5>
                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="product-item text-center border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/product-2.png" alt=""/>
                        <div className="mb-2">
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" className="h6 d-inline-block mb-2">Anti-dandruff Shampoo</a>
                        <h5 className="text-primary mb-3">$99.99</h5>
                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="product-item text-center border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/product-1.png" alt=""/>
                        <div className="mb-2">
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" className="h6 d-inline-block mb-2">Anti Hair Fall Shampoo</a>
                        <h5 className="text-primary mb-3">$99.99</h5>
                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="product-item text-center border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/product-2.png" alt=""/>
                        <div className="mb-2">
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" className="h6 d-inline-block mb-2">Hair Growing Shampoo</a>
                        <h5 className="text-primary mb-3">$99.99</h5>
                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid testimonial bg-primary my-5 py-5">
        <div className="container text-white py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-white mb-3">Our Customer Said <span className="fw-light text-dark">About Our Natural Shampoo</span></h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center" data-dot="1">
                            <img className="img-fluid border p-2" src="img/testimonial-1.jpg" alt=""/>
                            <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                            <h5 className="mb-1">Client Name</h5>
                            <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                        </div>
                        <div className="testimonial-item text-center" data-dot="2">
                            <img className="img-fluid border p-2" src="img/testimonial-2.jpg" alt=""/>
                            <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                            <h5 className="mb-1">Client Name</h5>
                            <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                        </div>
                        <div className="testimonial-item text-center" data-dot="3">
                            <img className="img-fluid border p-2" src="img/testimonial-3.jpg" alt=""/>
                            <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                            <h5 className="mb-1">Client Name</h5>
                            <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">From Our</span> Blog Articles</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/blog-1.jpg" alt=""/>
                        <a href="" className="h5 lh-base d-inline-block">Foods that are good for your hair growing</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/blog-2.jpg" alt=""/>
                        <a href="" className="h5 lh-base d-inline-block">How to take care of hair naturally</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="img/blog-3.jpg" alt=""/>
                        <a href="" className="h5 lh-base d-inline-block">How to use our natural & organic shampoo</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
                            style={{height: '48px'}}/>
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                className="fa fa-paper-plane text-white fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
