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
        paddingTop: '56%', // 16:9
        paddingBottom: "70%"
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      overrides: {
        MuiCardContent: {
          root: {
            padding: 0,
            "&:last-child": {
              paddingBottom: 0,
           },
          },
        },
      },
});

class Product extends React.Component {

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    const { addToCart } = this.props;

    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">${product.price.formatted}</Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        </CardContent>
        <CardActions  className={classes.cardActions}>
          <IconButton arial-label="Add to Cart" onClick={()=>{addToCart(product.id, 1)}}>
            <AddShoppingCart /> 
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Product);