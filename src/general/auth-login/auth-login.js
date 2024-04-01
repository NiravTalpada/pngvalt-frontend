import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './auth.css'
import { RiLoginBoxFill } from "react-icons/ri";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button type="button" onClick={() => loginWithRedirect()}><RiLoginBoxFill size={23} /></button>;
};

export default LoginButton;