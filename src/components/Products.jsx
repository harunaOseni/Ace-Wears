import React from "react"; 
import Grid from "@material-ui/core"; 

const products = [
    {id: 1, name: "Shoes", description: "Running shoes."}, 
    {id: 2, name: "Macbook", description: "Apple macbook."}
]

class Products extends React.Component{
    render(){
        return(
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product)=>{
                        <Grid  items xm={12} sm={6} md={4} lg={3}>
                            
                        </Grid>
                    })
                }
            </Grid> 
        )
    }
}


export default Products;

