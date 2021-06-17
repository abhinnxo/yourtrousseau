import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container-xxl text-center">
        <h3>Your Tresseao</h3>
        <p>Online Store</p>
        <p className="muted">&copy; 2021-2022 (All rights reserved)</p>
      </div>
      <div
        className="text-center"
        style={{ color: "white", backgroundColor: "#BC0000" }}
      >
        <p>
          This website is created with ❤ by{" "}
          <a
            style={{ color: "white" }}
            href="https://abhinnkrishn.me"
            target="_blank"
          >
            Abhinn krishn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
