import React from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__intro">
        <h1 className="banner__introText">Welcome To Ace Wears</h1>
        <Button onClick={() => window.location.replace("/#product")}>
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
