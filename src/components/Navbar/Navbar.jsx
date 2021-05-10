import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import { withStyles } from "@material-ui/core";
import { fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { init } from "ityped";
// The App Bar === Navbar
//Toolbar === content contained in the navBar
//Badge generates a small badge to the top-right and also holds content.
//Menus  displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.

const drawerWidth = 0;

const styles = (theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    fontFamily: "Helvetica",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

class Navbar extends React.Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Welcome To Ace Wears", "The Only Wears That Ace Your Day!"],
    });
  }

  render() {
    const { classes } = this.props;
    const { totalItemsInCart } = this.props;
    const { location } = this.props;
    return (
      <AppBar postion="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <img
            src={logo}
            alt="Ace Wears Logo"
            height="25px"
            className={classes.image}
          />
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
            fontWeight="fontWeightBold"
          >
            Ace Wears
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItemsInCart} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

const styleHOC = withStyles(styles)(Navbar);
export default withRouter(styleHOC);
