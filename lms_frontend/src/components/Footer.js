import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder, Nav} from 'react-bootstrap'
function Footer() {
  return (
    <div className="card text-center bg-dark mt-4">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-bold text-white">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-bold text-white">About Us</Link></li>
      <li className="nav-item"><Link to="contact-us" className="nav-link px-2 text-bold text-white">Contact Us</Link></li>
      <li className="nav-item"><Link to="/faq" className="nav-link px-2 text-bold text-white">FAQs</Link></li>
      <a href='https://twitter.com/Vector78756493?t=MOmHHroOi1-lniWiNwNE_w&s=09'><button type="button" class="btn btn-link text-bold text-white"><span class="bi bi-twitter"></span></button></a>
      <a href='https://wa.me/message/H6EPMV7BITKFO1'><button type="button" class="btn btn-link"><span class="bi bi-whatsapp text-bold text-white"></span></button></a>
    </ul>
    <p className="text-center text-bold text-white">© 2021 admissionsupportworldwide.co.uk, ltd</p>
    <p className="text-center text-bold text-white">Email:- admin@damissionsupportworldwide.co.uk</p>

     <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/tandc" className="text-white text-bold">Terms And Condition</Nav.Link>
      <Nav.Link href="/li"  className="text-white text-bold">Legal Information</Nav.Link>
    </Nav>
   
  </footer>
  </div>


  );
}

export default Footer;
