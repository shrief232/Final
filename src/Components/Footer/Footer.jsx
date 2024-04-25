import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    
    <footer className="footer">
     <hr/>   
     <div className="container">
       <div className="footer-row">
         <div className="footer-col">
          <h3 className="footer-col-title">About Us</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices mattis urna, nec rutrum libero mollis vitae.</p>
        <Link href="#">Learn More</Link>
      </div>
      <div className="footer-col">
        <h3 className="footer-col-title">Contact</h3>
        <ul>
          <li><Link href="#">Address: 123 Main Street</Link></li>
          <li><Link href="#">Phone: (555) 555-5555</Link></li>
          <li><Link href="#">Email: info@example.com</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-col-title">Follow Us</h3>
        <ul className="social-links">
          <li><Link href="#"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
          <li><Link href="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
          <li><Link href="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
        </ul>
      </div>
    </div>
    <hr/>
    <p className="copyright">Copyright &copy; 2024 All Rights Reserved.</p>
  </div>
</footer>

  )
}
