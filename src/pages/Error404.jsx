import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../images/error-404.svg";

const Error404 = () => {
  return (
    <div className="error-404 container-xxl">
      <h1 style={{ color: "#BC0000" }}>OPPS!</h1>
      <p>The Link you followed is either Broken or does not exists.</p>
      <Link to="/" className="btn mt-5 feature-store">
        Go Back to Home
      </Link>
      <div className="error-404-img">
        <img src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default Error404;
