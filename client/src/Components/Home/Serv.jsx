import Collapse from 'react-bootstrap';
const title = ["YouTube, IG & TikTok Latino Brand Channels","Latino SEO & Content Mapping","Social Media Transcreation & Management"]

export function Serv() {
    return(
        <section className="services border-bottom" id="services" data-aos="fade">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12">
                        <div className="section-heading text-center">
                            <h3><span className="txt-pink">Solutions</span> that help brands boost into the Latino space by leveraging a unique combination of industry and <span className="txt-pink">technology expertise.</span></h3>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseTranscreation" data-toggle="collapse" role="button">
                        <div className="card">
                            <div className="card-body">
                            <div className="feature-item">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h5 className="card-title">Latino Full Transcreation</h5>
                            <div className="collapse" id="collapseTranscreation">
                                <p className="card-text mb-0">Campaign ideation, concept development and full development of individual pieces. Bringing the Latino insights to life to leverage for your campaign and strategy activation.</p>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseBrand" data-toggle="collapse" role="button">
                        <div className="card">
                            <div className="card-body">
                            <div className="feature-item">
                                <i className="fas fa-play-circle"></i>
                            </div>
                            <h5 className="card-title">{title[0]}</h5>
                            <div className="collapse" id="collapseBrand">
                            <p className="card-text mb-0">Former 13 years YouTube Director will help you to audit and, development of brand channels and relevant content to actively improve your activity and optimize brand’s assets. Including dedicated bilingual editing video team.</p>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseSeo" data-toggle="collapse" role="button">
                        <div className="card">
                            <div className="card-body">
                            <div className="feature-item">
                                <i className="fas fa-search"></i>
                            </div>
                            <h5 className="card-title">{title[1]}</h5>
                            <div className="collapse" id="collapseSeo">
                            <p className="card-text mb-0">Organic positioning and opp to design your brand SEO strategies for Latino audience.  In language content development to dramatic increase your brand web position.</p>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseCommerce" data-toggle="collapse" role="button">
                        <div className="card">
                            <div className="card-body">
                            <div className="feature-item">
                                <i className="fas fa-store"></i>
                            </div>
                            <h5 className="card-title">eCommerce Latino activation</h5>
                            <div className="collapse" id="collapseCommerce">
                            <p className="card-text mb-0">Dedicated Multicultural ecommerce expertes will focus, helping your brand on incremental Latino’s sales, E2E approach to closing any gap in your e-retail strategy.</p>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseSocial" data-toggle="collapse" role="button">
                        <div className="card">
                            <div className="card-body">
                                <div className="feature-item">
                                <i className="fas fa-thumbs-up"></i>
                                </div>
                                <h5 className="card-title">{title[2]}</h5>
                                <div className="collapse" id="collapseSocial">
                                <p className="card-text mb-0">Creating your Latino social media strategy, engagement, content, utilizing a scientific approach to maximize your reach.</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <a className="card-link" href="#collapseROI" data-toggle="collapse" role="button">
                            <div className="card">
                            <div className="card-body">
                                <div className="feature-item">
                                <i className="fas fa-dollar-sign"></i>
                                </div>
                                <h5 className="card-title">Boosting your Latino performance ROI</h5>
                                <div className="collapse" id="collapseROI">
                                <p className="card-text mb-0">Best in class performance experts to support how to make that opportunity into a real dollars.</p>
                                </div>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}