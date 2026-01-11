import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
            <h1 className="display-4 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
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
                    <img className="img-fluid animated pulse infinite" src="img/shampoo-1.png" />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="text-primary mb-4">Healthy Hair <span className="fw-light text-dark">Is A Symbol Of Our
                            Beauty</span></h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non
                        malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent
                        tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                    <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                        labore lorem sit. Sanctus clita duo justo et tempor.</p>
                    <a className="btn btn-primary py-2 px-4" href="">Shop Now</a>
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
                            style={{height: '48px'}} />
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

export default AboutUs
