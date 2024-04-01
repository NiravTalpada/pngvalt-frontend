import { Link } from 'react-router-dom';
import './footer.css';
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

export default function Footers() {
  return (
      <div className='footer'>
        <div className='links'>
          <Navbar className='p-0'>
            <Nav className="gap-3">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar>
        </div>
        <div className='copyrightText'>
          <p>Copyright @{(new Date().getFullYear())} Pngvalt. All rights reserved</p>
        </div>
      </div>
  );
}