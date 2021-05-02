import React from "react";
import { Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {}
    };
    this.fetchCart = this.fetchCart.bind(this);
  }

  async componentDidMount() {
    const { data } = await commerce.products.list();
    this.setState({ products: data });
    this.fetchCart()
  }

  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    });
  }

  render() {
    console.log(this.state.cart);
    return (
      <div>
        <Navbar />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;