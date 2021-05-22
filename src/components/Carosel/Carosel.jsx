import { Carousel, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Olamide01 from "../../assets/olamide01.jpg";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  carouselContainer: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  textCSS: {
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    fontSize: "70px",
    width: "400px",
    fontFamily: "Niconne",
    color: "white !important",
    textShadow: "5px 5px #FFF6",
  },
  button: {
    position: "absolute",
    top: "84%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:hover":{
      color: "white"
    }
  },
  imagesCSS: {
    objectFit: "fill",
    width: "100%",
    marginTop: "55px",
    color: "whiteSmoke",
  },
});

class Carosel extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Carousel autoplay>
        <div className={classes.carouselContainer}>
          <div>
            <Typography className={classes.textCSS}>
              Welcome To Ace Wears
            </Typography>
            <Button
              variant="contained"
              color="info"
              className={classes.button}
              onClick={() => window.location.replace("/#product")}
            >
              Shop Now
            </Button>
          </div>
          <img
            src={Olamide01}
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
