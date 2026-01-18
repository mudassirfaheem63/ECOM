import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import ProductItem from '../components/ProductItem';
import Newsletter from '../components/Newsletter';

function Product() {
    return (
        <>
            <HeroHeader title="Products" />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
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
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <ProductItem image="Hairnic/img/product-1.png" name="Hair Shining Shampoo" price="$99.99" />

                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <ProductItem image="Hairnic/img/product-2.png" name="Anti-dandruff Shampoo" price="$99.99" />

                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <ProductItem image="Hairnic/img/product-1.png" name="Anti Hair Fall Shampoo" price="$99.99" />

                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <ProductItem image="Hairnic/img/product-2.png" name="Hair Growing Shampoo" price="$99.99" />
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                        </div>
                    </div >
                </div >
            </div >

            <Newsletter />

        </>
    )
}

export default Product
