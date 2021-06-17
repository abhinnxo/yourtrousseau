import React from "react";
import { Link } from "react-router-dom";
import "../js/scroll.js";
import Fashion from "../images/DrawKit-Fashion-Illustration-06.svg";

const Hero = () => {
  return (
    <div className="hero d-flex">
      <div className="row container-xxl mx-auto mt-5">
        <div className="text-center hero-para">
          <h1 className="display-1">It's your Trousseau</h1>
          <p className="mt-3 mb-5">
            We help you in finding the uniqueness in you.
          </p>
          <Link to="/store" className="btn rounded feature-store">
            Got to Shop
          </Link>
          &nbsp; &nbsp; &nbsp;
          <a
            href="https://blog.yourtrousseau.in/"
            target="_blank"
            className="btn rounded feature-read-blog"
          >
            Read Blog
          </a>
          <div className="d-flex">
            <img
              src={Fashion}
              alt=""
              className="hero-ill"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
