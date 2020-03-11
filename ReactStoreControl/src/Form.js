import React, { Component } from 'react';
 

class Form extends Component {

  constructor(props){
    super(props)
    this.startState = {
      id: "",
      name: "",
      price: "",
    }
    this.state = this.startState;
  }

  inputListener = event =>{
      const{name , value} = event.target

      this.setState({
        [name]: value,
      });
  }


  render(){
    const {id, name, price} = this.state;

    return(
      
      <form>
        <label htmlFor="id">Product ID </label>
        <input
          id = "id"
          type = "text"
          name = "id"
          value = {id}
          onChange = {this.inputListener}
         />
         
        <label htmlFor="name">Product name </label>
        <input
          id = "name"
          type = "text"
          name = "name"
          value = {name}
          onChange = {this.inputListener}

         />
         
        <label htmlFor="price">Product price </label>
        <input
          id = "price"
          type = "text"
          name = "price"
          value = {price}
          onChange = {this.inputListener}

         />
         <button type= "button" onClick = {()=> this.props.addProduct({id, name, price})}> Add product</button>
      </form>
    )
  }
  

}
export default Form;