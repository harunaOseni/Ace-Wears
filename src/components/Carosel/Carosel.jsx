import { Carousel } from "antd";
import 'antd/dist/antd.css';
import React from "react"; 


const contentStyle = {
  height: "500px",
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

          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    );
  };
};

export default Carosel;