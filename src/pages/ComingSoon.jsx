import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <Navbar />
      <h1 className="display-1 text-center pt-5">Coming Soon</h1>
      <h5 className="text-center mt-5">Stay tuned, we will be here soon...</h5>
      <div className="coming-soon-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoon;
