import './App.css';
import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './common-pages/home/home';
import Pricing from './common-pages/pricing/pricing';
import About from './common-pages/about/about';
import Contact from './common-pages/contact/contact';
import { Auth0Context, useAuth0 } from '@auth0/auth0-react';
import Profile from './pages/profile/profile';
import Cart from './pages/cart/cart';
import Order from './pages/order/order';

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/pricing" element={<Pricing/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/order" element={<Order/>}/>
      {/* <Route exact path="/create" element={<Create/>}/>
      <Route exact path="/update" element={<Update/>}/>
      <Route exact path="/delete" element={<Deletes/>}/> */}
    </Routes>
  );
}