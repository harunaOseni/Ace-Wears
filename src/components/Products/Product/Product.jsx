import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";

const styles = theme => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
});

class Product extends React.Component {

  render() {
    const { product } = this.props;
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="" title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton arial-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Product);