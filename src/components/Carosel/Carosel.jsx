import { Carousel } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Olamide01 from "../../assets/olamide01.jpg";
import Drake01 from "../../assets/drake01.jpg";
import Burna01 from "../../assets/odogwu  03.jpg";
import Burna02 from "../../assets/burna-boy-1.jpg";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  carouselContainer: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  textCSS: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
  },
  imagesCSS: {
    objectFit: "fill",
    width: "100%",
    marginTop: "55px",
  },
});

class Carosel extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Carousel autoplay>
        <div className={classes.carouselContainer}>
          <img
            src={Olamide01}
            alt="carouselImage"
            className={classes.imagesCSS}
            height={450}
          />
        </div>

        <div>
          <img
            src={Drake01}
            alt="carouselImage"
            className={classes.imagesCSS}
            height={450}
          />
        </div>

        <div>
          <img
            src={Burna01}
            alt="carouselImage"
            className={classes.imagesCSS}
            height={450}
          />
        </div>

        <div>
          <img
            src={Burna02}
            alt="carouselImage"
            className={classes.imagesCSS}
            height={450}
          />
        </div>
      </Carousel>
    );
  }
}

export default withStyles(styles)(Carosel);
