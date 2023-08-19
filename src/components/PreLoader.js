import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Design,</span>
        <span>Develop,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
