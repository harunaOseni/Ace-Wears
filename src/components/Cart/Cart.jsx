import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.EmptyCart = this.EmptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
  }
  render() {
    const {cart} = this.props; 
    const isEmpty = !cart.line_items.length; 

    function EmptyCart() {
      <Typography variant="subtitle1">
        You have no items in your shopping cart, start adding some!
      </Typography>;
    }

    function filledCart() {
        <> {/* A React Fragment helps in rendering a group of element*/}
        <Grid container spacing={3}>
            {
                cart.line_items.length.map((item)=>{
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                })
            }
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button></Button>
                
            </div>
        </div>
        </>
    }

    return (
      <Container>
        <div classnName={classes.toolbar} />
        <Typography className={classes.title} variant="h3">
          Your Shopping Cart
        </Typography>
        {isEmpty ? <EmptyCart /> : <filledCart />}
      </Container>
    );
  }
}

export default Cart;