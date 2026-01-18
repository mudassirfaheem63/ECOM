import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import BlogItem from '../components/BlogItem';
import Newsletter from '../components/Newsletter';

function Blog () {
    return (
        <>

    <HeroHeader title="Blog Articles" />

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

export default Blog
