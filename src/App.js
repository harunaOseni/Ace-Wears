import React from "react";
import {Navbar, Products} from "./components";

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar/>
        <Products/>
      </div>
    );
  }
}

export default App;