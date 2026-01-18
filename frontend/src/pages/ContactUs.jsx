import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import Newsletter from '../components/Newsletter';

function ContactUs() {
  return (
       <>
     <HeroHeader title="Contact" />

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="contact-info-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-map-marker-alt fa-3x text-dark mb-4"></i>
                            <h5 className="text-white">Office Address</h5>
                            <h5 className="fw-light text-white">123 Street, New York, USA</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="contact-info-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-phone-alt fa-3x text-dark mb-4"></i>
                            <h5 className="text-white">Call Us</h5>
                            <h5 className="fw-light text-white">+012 345 67890</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="contact-info-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-envelope fa-3x text-dark mb-4"></i>
                            <h5 className="text-white">Mail Us</h5>
                            <h5 className="fw-light text-white">info@example.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="text-primary mb-5"><span className="fw-light text-dark">If You Have Any Query,</span> Please Contact Us</h1></div>
            <div className="row g-5">
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.1s">
                    <h4 className="lh-base mb-4">Receive messages instantly with our PHP and Ajax contact form - available in the <a href="https://htmlcodex.com/downloading/?item=2727">Pro Version</a> only.</h4>
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                    <iframe className="w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameBorder={0} style={{minHeight: '300px', border: '0'}} allowFullScreen aria-hidden="false"
                    tabIndex={0}></iframe>
                </div>
            </div>
        </div>
    </div>

     <Newsletter />

       </>
  )
}

export default ContactUs
