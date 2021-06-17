import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../images/store.svg";
import Icon2 from "../images/blog.svg";
import Icon3 from "../images/support.svg";

const KnowMore = () => {
  return (
    <div className="">
      <h1
        className="display-3 jumbotron text-center my-5"
        style={{ color: "#BC0000" }}
      >
        Know More
      </h1>
      <div className="feature-card container-xxl d-flex justify-content-evenly">
        <div class="card" style={{ width: "18rem" }}>
          <img src={Icon1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Buy Online</h5>
            <p class="card-text">
              Explore our Store and buy what you need the most.
            </p>
            <br />
            <Link to="/store" class="btn feature-store">
              Visit Shop
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Icon2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Blog</h5>
            <p class="card-text">
              We will Keep you updated on what's fresh in the town.
            </p>
            <br />
            <a
              href="https://blog.yourtrousseau.in/"
              target="_blank"
              class="btn feature-store"
            >
              Read Blog
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Icon3} class="card-img-top feature-img-3" alt="..." />
          <div class="card-body">
            <h5 class="card-title">24 X 7 Support</h5>
            <p class="card-text">
              We work all day around to deliver you the best customer Support.
            </p>
            <br />
            <Link to="/contact" class="btn feature-store">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
