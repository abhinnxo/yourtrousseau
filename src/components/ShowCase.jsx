import React from "react";
import Women1 from "../images/women1.jpeg";
import Women2 from "../images/women2.jpeg";

const ShowCase = () => {
  return (
    <div className="container-xxl">
      <h1 className="display-3 text-center mt-5" style={{ color: "#bc0000" }}>
        Indian Fashion
      </h1>
      <div className="d-flex mt-5 justify-content-between text-center women">
        <img
          src={Women1}
          alt=""
          style={{
            height: "320px",
          }}
        />
        <div className="d-flex">
          <h3 className="my-auto mx-auto py-5">
            Know Your Tradition, <br /> Reach Out in Style
          </h3>
        </div>
        <div>
          <img src={Women2} alt="" id="women2" />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
