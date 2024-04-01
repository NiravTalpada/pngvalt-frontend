
import React, { useState,useContext, useEffect } from "react";
import './header.css'
import {
  Link,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from '../../general/auth-login/auth-login'
import LogoutButton from '../../general/auth-login/auth-logout'
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom'
import ImageCatagoryContext from "../../context/imageCatagory";
import { FaCartArrowDown } from "react-icons/fa";
import { RiFindReplaceFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Button, Col, Image, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import logo from '../../images/logo.png';

export default function Header() {
  const context = useContext(ImageCatagoryContext);
  const {setSearchText } = context;
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated} = useAuth0();



  const [formData, setFormData] = useState({
    serach : ''
  });
  const cart = useSelector((state) => state.cart)

  const handleSubmit = (event) => {
    event.preventDefault();
    var search = formData.search;
    setSearchText(search);
  }
  
  useEffect(() => {
    count()
  })

  const count = () => {
    let total = 0
    if(cart !== undefined){
      cart.forEach(element => {
        total += element.quantity
      });
      return total
    }
  }

  return (
      <div className="header-main">
        <Container fluid>
          <Row>
            <Col sm="1" md="1" xl="1" className="d-flex justify-content-center align-items-center">
              <Link to="/"><Image src={logo} width={130}/></Link>
            </Col>
            <Col sm="7" md="7" xl="7" className="d-flex justify-content-center align-items-center">
                <TextField className="serach-box" placeholder="Search for all image on pngvalt.."></TextField>
            </Col>
            <Col sm="3" md="3" xl="3" className="d-flex justify-content-center align-items-center">
            {isAuthenticated ? 
                <Navbar>
                    <Nav className="gap-3">
                      <Link to="/">Explore</Link>
                      <Link to="/contact">Advertise</Link>
                      <Link to="/profile" >Profile</Link>
                      <Link to="/order" >My Order</Link>
                    </Nav>
                </Navbar>
              : 
                <Navbar>
                  <Nav className="gap-3">
                      <Link to="/">Explore</Link>
                      <Link to="/contact">Advertise</Link>
                  </Nav>
                </Navbar>
              }
            </Col>
            <Col sm="1" md="1" xl="1">
              
              {isAuthenticated ? 
              <Navbar className="d-flex justify-content-end mt-2 mb-2 border-left-1">
                <Nav className="d-inline-flex  gap-2">
                    <Link className="add-cart" to="/cart"><FaCartArrowDown size={23} />{count() ? <div className="cart-count">{count()}</div> : ''}</Link>
                    <LogoutButton></LogoutButton>
                </Nav>
              </Navbar> : 
              <Navbar className="d-flex justify-content-end mt-2 mb-2">
                <Nav className="d-inline-flex  gap-2">
                    <LoginButton></LoginButton>
                </Nav>
              </Navbar>
              }
              
            </Col>
          </Row>
        </Container>
      </div>
  );
}
