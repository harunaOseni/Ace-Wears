import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple macbook.", price: "$10" },
];

class Products extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={4}>
        {" "}
        {/*creating grid container for product item */}
        {products.map((product) => {
          return (
            <Grid items xm={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Products;
