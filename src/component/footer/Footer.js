import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <div className="container-fluid bg-dark">
            <div className="max-width-container text-center ">
              <div className="elements text-white">
                <div className="element">About us</div>
                <div className="element">We're Hiring</div>
                <div className="element">Employer Resources</div>
                <div className="element">Our Services</div>
                <div className="element">Terms & Conditions</div>
                <div className="element">Privacy</div>
                <div className="element">Refund Policy</div>
                <div className="element">Contact us</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom float-end container-fluid bg-dark">
            <div id="copyright" className="text-white p-2">
              © Copyright 2022 infonic{" "}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
