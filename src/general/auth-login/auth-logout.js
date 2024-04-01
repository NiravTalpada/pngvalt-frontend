import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './auth.css'
import { FaDoorOpen } from "react-icons/fa";



const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FaDoorOpen size={23} /></button>
  );
};

export default LogoutButton;