
export function HeaderHome(){
    return(
        <div id="portada" className="masthead">

            <video autoPlay muted loop playsInline poster="img/bg_eyes.jpg" id="background-video-hh">
            <source src="video/social-network-connections.mp4" type="video/mp4"/>
                <source src="video/social-network-connections.webm" type="video/webm"/>
                <source src="video/social-network-connectionsvideo.ogv" type="video/ogg"/>
            </video>

            <div className="container h-100 text-center">
                <div className="row h-100">
                    <div className="col-lg-12 mx-auto my-auto" data-aos="fade">
                        <div className="header-content mx-auto">
                            <div id="carouselFrases" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="4000">
                                        <h1 className="mb-4">Helping create <span className="txt-pink">meaningful connections</span> with Latinos in the US</h1>
                                    </div>
                                    <div className="carousel-item" data-interval="4000">
                                        <h1 className="mb-4">30 multicultural strategists <br className="d-none d-lg-block"/> <span className="txt-pink">across 4 different locations</span></h1>
                                    </div>
                                    <div className="carousel-item" data-interval="4000">
                                        <h1 className="mb-4">Solutions that help <span className="txt-pink">brands boost</span> into the Latino space</h1>
                                    </div>
                                </div>
                            </div>
                            <p className="lead">We are a boutique communication studio that aims to help brands tap into unexplored business opportunities through the power of Transcreation.</p>
                            <a href="#services" className="btn btn-outline-pink btn-xl js-scroll-trigger" title="HolaHello Studio | Services">Services <i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}