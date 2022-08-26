import Form from 'react-bootstrap/Form';

export function Contact() {
    return (
        <section className="contact-us bg-hands-white border-bottom" id="contact-us" data-aos="fade">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 my-auto">
                    <div className="section-heading">
                    <img style={{maxWidth:'80px'}} src="img/isologo_pink.svg" className="img-fluid" alt=""/>
                    <h2>Contact Us</h2>
                    <p className="text-muted">Let's Get in Touch!<br/>
                    Or you can send an e-mail to <a href="mailto:info@holahellostudio.com" title="HolaHello contact e-mail">info@holahellostudio.com</a>
                    </p>
                    </div>
                </div>

                    <div className="col-lg-12 my-auto">

                    <div id="form-1-res">

                    <Form method="POST" action="inscripcion-getgloby" id="form-1">
                        <div className="row align-items-stretch mb-5">

                                <div className="col-lg-3">
                                <div className="form-group">
                                    <Form.Label>Company *</Form.Label>
                                    <Form.Control className="form-control" id="company" name="company" type="text" placeholder="Your Company" required="required"/>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="form-group">
                                    <Form.Label>Name *</Form.Label>
                                    <Form.Control className="form-control" id="name" name="name" type="text" placeholder="Your Name" required="required"/>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="form-group">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control className="form-control" id="email" name="email" type="email" placeholder="Your Email" required="required"/>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="form-group">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone Number"/>
                                </div>
                                </div>
                            <div className="col-lg-12">
                                <div className="form-group form-group-textarea">
                                    <Form.Label>Additional Comments </Form.Label>
                                    {/* <textarea className="form-control" id="message" name="message" placeholder="How can we help you?"></textarea> */}
                                    <Form.Label as="textarea" placeholder="How can we help you?" id="message" name="message" className="form-control" style={{ height: '100px' }}></Form.Label>
                                </div>
                            </div>

                            <div className="col-lg-12 mb-4">
                                <Form.Label>Check Captcha </Form.Label>
                                <div className="alert alert-danger" style={{display: 'none'}} id="alert-captcha-1"> Check captcha to continue!</div>
                                <div id="RecaptchaField1"></div>
                                <hr className="lighter"/>
                            </div>

                            <div className="error" style={{display: 'none', color: '#e56061'}}></div>

                            <div className="col-lg-12 text-right">
                                <Form.Control type="hidden" name="where" id="where-contact" />
                                <button className="btn btn-primary btn-xl" type="submit">Send Message</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}