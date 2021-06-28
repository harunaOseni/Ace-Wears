import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56%",
    paddingBottom: "70%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardcontent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
    };
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }

  handleChangeSize(event) {
    this.setState({
      size: event.target.value,
    });
  }

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    const { addToCart } = this.props;
    const { size } = this.state;

    return (
      <Card className={classes.root} id="product">
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">${product.price.formatted}</Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <FormControl style={{minWidth: 120}}>
            <InputLabel>{product.variant_groups[0].name}</InputLabel>
            <Select value={this.state.size} onChange={this.handleChangeSize}>
              {product.variant_groups[0].options.map((option) => (
                <MenuItem value={option.id}>{option.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {product.variant_groups.length > 0 && !size ? (
            <IconButton
              disabled={true}
            >
              <AddShoppingCart />
            </IconButton>
          ) : (
            <IconButton
              arial-label="Add to Cart"
              onClick={() => {
                addToCart(
                  product.id,
                  1,
                  product.variant_groups[0].id,
                  this.state.size
                );
              }}
            >
              <AddShoppingCart />
            </IconButton>
          )}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Product);
