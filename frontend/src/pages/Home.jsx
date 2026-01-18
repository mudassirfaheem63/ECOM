import { Link } from 'react-router-dom';
import FeatureList from '../components/FeatureList';
import BenefitsSection from '../components/BenefitsSection';
import HowToUseSection from '../components/HowToUseSection';
import TestimonialSection from '../components/TestimonialSection';
import ProductItem from '../components/ProductItem';
import BlogItem from '../components/BlogItem';
import Newsletter from '../components/Newsletter';

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
                    <img className="img-fluid animated pulse infinite" src="Hairnic/img/shampoo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <FeatureList />

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src="Hairnic/img/shampoo-1.png"/>
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
                    <img className="img-fluid animated pulse infinite" src="Hairnic/img/shampoo-2.png"/>
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

    <BenefitsSection />

    <HowToUseSection />

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <ProductItem image="Hairnic/img/product-1.png" name="Hair Shining Shampoo" price="$99.99" />
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <ProductItem image="Hairnic/img/product-2.png" name="Anti-dandruff Shampoo" price="$99.99" />
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <ProductItem image="Hairnic/img/product-1.png" name="Anti Hair Fall Shampoo" price="$99.99" />
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <ProductItem image="Hairnic/img/product-2.png" name="Hair Growing Shampoo" price="$99.99" />
                </div>
            </div>
        </div>
    </div>

    <TestimonialSection />

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">From Our</span> Blog Articles</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <BlogItem image="Hairnic/img/blog-1.jpg" title="Foods that are good for your hair growing" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat." />
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <BlogItem image="Hairnic/img/blog-2.jpg" title="How to take care of hair naturally" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat." />
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <BlogItem image="Hairnic/img/blog-3.jpg" title="How to use our natural & organic shampoo" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat." />
                </div>
            </div>
        </div>
    </div>

    <Newsletter />
    </>
  )
}

export default Home
