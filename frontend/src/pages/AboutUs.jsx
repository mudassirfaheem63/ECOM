import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import FeatureList from '../components/FeatureList';
import Newsletter from '../components/Newsletter';

function AboutUs() {
  return (
    <>
    <HeroHeader title="About Us" />

    <FeatureList />

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

    <Newsletter />

    </>
  )
}

export default AboutUs
