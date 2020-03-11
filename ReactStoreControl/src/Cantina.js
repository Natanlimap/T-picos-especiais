import React, { Component } from 'react';
import Itens from './ItensTable';
import Form from "./Form"
class Store extends Component{
  state = {
    products : [
      {
        id: "001",
        name: "Coffee",
        price: "R$ 0,99", 
      },
      {
        id: "002",
        name: "Toast",
        price: "R$ 1,99", 
      },
      {
        id: "003",
        name: "Juice",
        price: "R$ 2,50", 
      },
    ],
  };
  
  removeProduct = (removeIndex) =>{
    
    const {products} = this.state;

    this.setState(
      {
        products : products.filter((product, index)=>{ 
          return removeIndex !== index;
        })
      }
    );

  }

  addProduct = (product) =>{
    const {products} = this.state
    let a = products;
    a[a.length] = {id: product.id, name: product.name, price: product.price};
    console.log(a);
    this.setState({
    products: a
    });
  }

   render(){
    return (
      <div>
        <h1>STORE ITENS</h1>
        <Itens products = {this.state.products} removeProduct = {this.removeProduct}></Itens>
        <Form products = {this.state.products} addProduct = {this.addProduct}></Form>
    </div>
    )
   }
}
export default Store;