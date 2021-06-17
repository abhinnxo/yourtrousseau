import React from "react";
import Navbar from "../components/Navbar";
import Instagram from "../images/instagram.svg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container-xxl d-flex flex-column">
        <h1
          className="jumbotron display-3 text-center pt-5"
          style={{ color: "#BC0000" }}
        >
          Contact
        </h1>
        <div className="mx-auto d-flex pt-5 contact">
          <div
            className="contact-card d-flex rounded p-3 m-3"
            style={{ width: "300px", height: "150px" }}
          >
            <img src={Instagram} alt="" className="my-auto" />
            <div className="d-flex flex-column my-auto mx-auto">
              <h5 className="mx-auto">Yukta Tripathi</h5>
              <h6 className="mx-auto">Owner</h6>
              <a
                href="https://instagram.com/_yuktard"
                target="_blank"
                className="mx-auto"
              >
                Visit Instagram
              </a>
            </div>
          </div>
          <div
            className="contact-card d-flex rounded p-3 m-3"
            style={{ width: "300px", height: "150px" }}
          >
            <img src={Instagram} alt="" className="my-auto" />
            <div className="d-flex flex-column my-auto mx-auto">
              <h5 className="mx-auto">Your Trousseau</h5>
              <h6 className="mx-auto">Brand Page</h6>
              <a
                href="https://instagram.com/ytrousseau"
                target="_blank"
                className="mx-auto"
              >
                Visit Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
