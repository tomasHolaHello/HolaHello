export function FooterGlobal(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                    <h6 className="txt-pink">New York</h6>
                    <ul className="list-unstyled">
                    <li><span className="txt-pink">Address:</span> 454W, 54th Street, Suite 4O, New York, New York, 10019.</li>
                    <li><a href="contact"><i className="fas fa-envelope"></i> _Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                    <h6 className="txt-pink">Madrid</h6>
                    <ul className="list-unstyled">
                    <li><span className="txt-pink">Address:</span> Calle de Alcalá 244, 28027 Madrid, Madrid.</li>
                    <li><a href="contact"><i className="fas fa-envelope"></i> _Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                    <h6 className="txt-pink">México DF</h6>
                    <ul className="list-unstyled">
                    <li><span className="txt-pink">Address:</span> Obrero Mundial número 644 interior 103, Colonia Atenor Salas, Alcaldía Benito Juárez, Ciudad de México, CP 03010.</li>
                    <li><a href="contact"><i className="fas fa-envelope"></i> _Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                    <h6 className="txt-pink">Buenos Aires</h6>
                    <ul className="list-unstyled">
                    <li><span className="txt-pink">Address:</span> Pasaje Bollini 2296 4th Floor, Buenos Aires, Argentina.</li>
                    <li><a href="contact"><i className="fas fa-envelope"></i> _Contact Us</a></li>
                    </ul>
                </div>
                </div>
                <hr className="light"/>
                <div className="row">
                <div className="col-md-6 my-auto">
                    <p><span className="txt-pink">© holahellostudio.com 2021</span> All Rights Reserved.</p>
                </div>
                <div className="col-md-6 my-auto">
                    <ul className="list-inline list-social">
                    <li className="list-inline-item social-instagram">
                        <a href="https://www.instagram.com/holahellony/" title="HolaHello Studio | Instagram">Instagram 
                        <span> </span><i className="fab fa-instagram"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item social-linkedin">
                        <a href="https://www.linkedin.com/company/holahello/mycompany/" title="HolaHello Studio | Linkedin">Linkedin 
                        <span> </span><i className="fab fa-linkedin"> </i>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <hr className="light"/>
            <div className="row">
                <div className="col-12">
                <div className="logos"><img src="img/google-partners.png" alt="Google Partner"/></div>
                <div className="logos"><img src="img/google-adwords.png" alt="Google Ads Certified"/></div>
                <div className="logos"><img src="img/google-analytics.png" alt="Google Analytics Qualified"/></div>
                </div>
            </div>
            </div>
        </footer>
    );
}