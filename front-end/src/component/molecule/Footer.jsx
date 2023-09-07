import React from "react";
import Button from "../atoms/button/Button";
import "./Footer.css";
import Email from "../../../public/image/email.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerHeader">
        <h2>Start Your Free Trial</h2>
        <p>No credit card required. Try out the app for free!</p>
      </div>
      <form className="footerForm">
        <div className="Inputfooter">
          <img src={Email} alt="email_logo" className="footerLogo" />
          <input
            type="text"
            placeholder="Please Enter your work email"
            className="footerInput"
          />
        </div>
        <Button className="footerbtn" title="START TRIAL" />
      </form>
    </div>
  );
}

export default Footer;
