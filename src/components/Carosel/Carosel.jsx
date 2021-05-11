import { Carousel } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Olamide01 from "../../assets/olamide01.jpg";
import Drake01 from "../../assets/drake01.jpg";
import Burna01 from "../../assets/odogwu  03.jpg";
import Burna02 from "../../assets/burna-boy-1.jpg";

class Carosel extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <img
            src={Olamide01}
            alt="carouselImage"
            style={{objectFit:"fill", width: "100vw", marginTop: "60px"}}
            height={450}
          />
        </div>
        <div>
        <img
            src={Drake01}
            alt="carouselImage"
            style={{objectFit:"fill", width: "100vw", marginTop: "60px"}}
            height={450}
          />
        </div>
        <div>
        <img
            src={Burna01}
            alt="carouselImage"
            style={{objectFit:"fill", width: "100vw", marginTop: "60px"}}
            height={450}
          />
        </div>
        <div>
        <img
            src={Burna02}
            alt="carouselImage"
            style={{objectFit:"fill", width: "100vw", marginTop: "60px"}}
            height={450}
          />
        </div>
      </Carousel>
    );
  }
}

export default Carosel;