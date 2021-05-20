import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "3px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "3%",
    width: "100%",
    justifyContent: "space-between",
  },
});

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    const { classes } = this.props;
    const { removeFromCart } = this.props;
    const { emptyCart } = this.props;
    const { updateQuantity } = this.props;

    if (!cart.line_items) return "Loading";

    const renderEmptyCart = (
      <Typography variant="subtitle1">
        You have no items in your shopping cart,{" "}
        <Link className={classes.link} to="/">
          start adding some
        </Link>
        !
      </Typography>
    );

    const renderCart = (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateQuantity}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails} >
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => emptyCart()}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        </div>
        <hr/>
      </>
    );

    return (
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom>
          Your Shopping Cart
          <hr/>
        </Typography>
        {!cart.line_items.length ? renderEmptyCart : renderCart}
      </Container>
    );
  }
}

export default withStyles(styles)(Cart);
