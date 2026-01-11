import { Link } from 'react-router-dom';

function HowToUse () {
    return (
        <>
    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
            <h1 className="display-4 text-white mb-3 animated slideInDown">How To Use</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">How To Use</li>
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


        </>
    )
}

export default HowToUse
