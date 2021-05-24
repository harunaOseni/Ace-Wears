import React from "react";
import { Navbar, Products, Cart, Carosel, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {},
      variantInfo: [],
    };
    this.fetchCart = this.fetchCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleUpdateCartQuantity = this.handleUpdateCartQuantity.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  async componentDidMount() {
    const { data } = await commerce.products.list();
    this.setState({ products: data });
    this.fetchCart();
  }

  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart });
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }

  handleAddToCart(productId, quantity, variantGroupId, optionId) {
    commerce.cart
      .add(productId, quantity, {[variantGroupId]: optionId})
      .then((item) => {
        this.setState({ cart: item.cart });
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
      console.log(productId, quantity, variantGroupId, optionId);
  }

  handleUpdateCartQuantity(productId, quantity) {
    commerce.cart
      .update(productId, { quantity })
      .then((response) => {
        this.setState({ cart: response.cart });
      })
      .catch((error) => {
        console.error(
          "There was an error in updating items in the Cart!",
          error
        );
      });
      console.log(this.state.cart);
  }

  handleRemoveFromCart(productId) {
    commerce.cart
      .remove(productId)
      .then((response) => {
        this.setState({ cart: response.cart });
      })
      .catch((error) => {
        console.error("There was an error removing items from cart", error);
      });
  }

  handleEmptyCart() {
    commerce.cart
      .empty()
      .then((response) => {
        this.setState({ cart: response.cart });
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar totalItemsInCart={this.state.cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Carosel />
              <Products
                products={this.state.products}
                addToCart={this.handleAddToCart}
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={this.state.cart}
                removeFromCart={this.handleRemoveFromCart}
                emptyCart={this.handleEmptyCart}
                updateQuantity={this.handleUpdateCartQuantity}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={this.state.cart} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
