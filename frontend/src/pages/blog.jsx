import { Link } from 'react-router-dom';

function Blog () {
    return (
        <>

    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
            <h1 className="display-4 text-white mb-3 animated slideInDown">Blog Articles</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Blog Articles</li>
                </ol>
            </nav>
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

export default Blog
