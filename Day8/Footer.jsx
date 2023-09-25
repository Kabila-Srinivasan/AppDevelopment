import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Home Appliance Service Center</p>
    </footer>
  );
}

export default Footer;
