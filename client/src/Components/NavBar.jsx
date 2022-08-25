import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

export function NavBar() {
  return (
      // <Navbar bg="dark" variant="dark">
      //   <Container>
      //     {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      //     <Nav className="me-auto">
      //       <Nav.Link href="/">Home</Nav.Link>
      //       <Nav.Link href="/team">Team</Nav.Link>
      //       <Nav.Link href="/contact">Contact</Nav.Link>
      //       <Nav.Link href="/clients">Clients</Nav.Link>
      //     </Nav>
      //   </Container>
      // </Navbar>

<Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" data-aos="fade">
  <Container className="container">
    <a className="lg" href="./" title="HolaHello Studio"></a>

    <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </Button>

    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="./#services"  title="HolaHello Studio | Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="./#portfolio" title="HolaHello Studio | Work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="./#clients" title="HolaHello Studio | Clients">Clients</a>
        </li>
        <li className="nav-item">
          <a className="<?php echo ($selected=='team')?'selected':''; ?> nav-link" href="team" title="HolaHello Studio | Team">Team</a>
        </li>
        <li className="nav-item">
          <a className="<?php echo ($selected=='contact')?'selected':''; ?> nav-link" href="contact" title="HolaHello Studio | Contact">Contact</a>
        </li>
        <li className="social d-none d-lg-block d-xl-block">
          <a title="Instagram | HolaHello Studio" href="https://www.instagram.com/holahellostudio/" target="_blank"><i className="fab fa-instagram"></i></a>
        </li>
        <li className="social d-none d-lg-block d-xl-block">
          <a title="Linkedin | HolaHello Studio" href="https://www.linkedin.com/company/holahello/mycompany/" target="_blank"><i className="fab fa-linkedin"></i></a>
        </li>

        <li className="nav-item d-lg-none d-xl-none">
          <a className="nav-link" title="Instagram | HolaHello Studio" href="https://www.instagram.com/holahellostudio/" target="_blank">Instagram <i className="fab fa-instagram"></i></a>
        </li>
        <li className="nav-item d-lg-none d-xl-none">
          <a className="nav-link" title="Linkedin | HolaHello Studio" href="https://www.linkedin.com/company/holahello/mycompany/" target="_blank">Linkedin <i className="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
  </Container>
</Navbar>



      );
}