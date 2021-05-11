import { Carousel } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Olamide01 from "../../assets/olamide01.jpg";
import Drake01 from "../../assets/drake01.jpg";
import Burna01 from "../../assets/odogwu  03.jpg";
import Burna02 from "../../assets/burna-boy-1.jpg";

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Carosel extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <img
            src={Olamide01}
            alt="carouselImage"
            width={673}
            height={500}
          />
        </div>
        <div>
        <img
            src={Drake01}
            alt="carouselImage"
            width={673}
            height={500}
          />
        </div>
        <div>
        <img
            src={Burna01}
            alt="carouselImage"
            width={673}
            height={500}
          />
        </div>
        <div>
        <img
            src={Burna02}
            alt="carouselImage"
            width={673}
            height={500}
          />
        </div>
      </Carousel>
    );
  }
}

export default Carosel;