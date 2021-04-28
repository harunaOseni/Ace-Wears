import React from "react"; 
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons"; 
import { mergeClasses } from "@material-ui/styles";
import logo from "../../assets/commerce.png"

// The App Bar === Navbar 
//Toolbar === content contained in the navBar
//Badge generates a small badge to the top-right of its child(ren) which hold some information about a certain action.
//Menus  displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.

class Navbar extends React.Component{
    render(){
        return(
            <AppBar postion="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Ecommerce_Template" height="25px" className={classes.image}/>
                        Ecommerce-Template 
                    </Typography>
                </Toolbar>
            </AppBar> 
        )
    }
}
export default Navbar;