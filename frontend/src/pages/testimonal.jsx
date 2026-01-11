import { Link } from 'react-router-dom';

function Testimonial () {
    return (
        <>
    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
            <h1 className="display-4 text-white mb-3 animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
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

        </>
    )
}

export default Testimonial
