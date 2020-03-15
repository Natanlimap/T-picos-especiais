import React, { Component } from 'react';


class Form extends Component {

  constructor(props) { //our class constructor
    
    super(props) //enable "this"
    this.startState = { //the form content start state
      id: "",
      name: "",
      price: "",
      quant: "",
    }
    this.state = this.startState; 
  }
  //myFormStyle
  formStyle = {
    display: "block",
    margin: "auto",
    textAlign: "right",
  }
  inputListener = event => { 
    //is called when the content of the form is changed 
    const { name, value } = event.target 
    this.setState({ 
      //changes the state of the content of the form
      //with the typed change
      [name]: value,
    });
  }
  render() {
    const { id, name, price, quant } = this.state; //getting our form start state
    return (
      <div style={this.divStyle}>
        <form style={this.formStyle}>
          <div>
            <label htmlFor="id">Product ID </label>
            <input
              id="id"
              type="text"
              name="id"
              value={id}
              onChange={this.inputListener}
            />
          </div>
          <div>
            <label htmlFor="name">Product name </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.inputListener}

            />
          </div>

          <div>
            <label htmlFor="price">Product price </label>
            <input
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={this.inputListener}

            />
          </div>
          <div>
            <label htmlFor="quant">Quantity   </label>
            <input
              id="quant"
              type="number"
              name="quant"
              value={quant}
              onChange={this.inputListener}
            />
          </div>

          <button type="button" onClick={() => this.props.addProduct({ id, name, price, quant })}> Add product</button>
        </form>
      </div>
    )
  }


}
export default Form;