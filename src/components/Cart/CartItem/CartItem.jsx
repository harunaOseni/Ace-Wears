import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  media: {
    height: "200px",
    paddingTop: '30%', // 16:9
    paddingBottom: "40%"
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },

  cartActions: {
    justifyContent: "space-between",
  },

  buttons: {
    display: "flex",
    alignItems: "center",
  },
});


class CartItem extends React.Component {
  render() {
    const { item } = this.props;
    const { classes } = this.props; 
    const {removeFromCart} = this.props;
    const {updateCartQuantity}  = this.props;
    return (
      <Card className="cart-item">
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons} style={{ flex: 1 }}>
            <Button type="button" size="small" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
              -
            </Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => removeFromCart(item.id)} 
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CartItem);
