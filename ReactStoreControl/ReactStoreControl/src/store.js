import React, { Component } from 'react';
import Itens from './ItensTable';
import Form from "./Form"
class Store extends Component{
  state = {  //defining our state
    products : [ //array of products
      {
        id: "001",
        name: "Coffee",
        price: "R$ 0,99", 
        quant: 2,
      },
      {
        id: "002",
        name: "Toast",
        price: "R$ 1,99",
        quant: 2, 
      },
      {
        id: "003",
        name: "Juice",
        price: "R$ 2,50",
        quant: 2, 
      },
    ],
  };
  
  removeProduct = (removeIndex) =>{ 
    //this function removes the product
    //of the array when the remove button is clicked
    const {products} = this.state; //getting the products 

    this.setState( //changing the current state
      {
        products : products.filter((product, index)=>{
          
        //this property returns all products except the one
        // with the index to be removed 
          return removeIndex !== index;
        })
      }
    );

  }
  inventoryControl = (index, action) =>{ 
    //change the quantity of each product
    //when clicked 
    const {products} = this.state //getting the products
    let a = products; 
    if(action === "+"){ //check if it will increase or decrease the quantity
      a[index].quant += 1;
    }else{
      a[index].quant -= 1;  
    }
    this.setState({
      products: a, //the product status assumes the a as the current state 
    })
  }
  //function thats add a product on my array of products
  addProduct = (product) =>{
    const {products} = this.state //getting the products
    let a = products; 
    a[a.length] = {id: product.id, name: product.name, price: product.price, quant: parseInt(product.quant)}; //adding the product on the last position
    this.setState({
    products: a //the product status assumes the a as the current state
    });
  }
   render(){
    return ( //the store content
      <div>
        <h1>INVENTORY CONTROLER</h1> 
        <Itens products = {this.state.products} inventoryControl = {this.inventoryControl} removeProduct = {this.removeProduct}></Itens>
        <Form products = {this.state.products} addProduct = {this.addProduct}></Form>
    </div>
    )
   }
}
export default Store;