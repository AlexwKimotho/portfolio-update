import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

    const blueTextStyle = {
      color: 'skyblue'
    };

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Design,</span>
        <span>Develop,</span>
        <span style={blueTextStyle} >Create.</span>
      </div>
    </div>
  );
};

export default PreLoader;
