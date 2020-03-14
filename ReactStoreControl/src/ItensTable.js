import React from 'react';

const TableHead = () => { //tableHeadComponent
  const thStyle = {
    textAlign: "left",
    border: "1px solid white",
    verticalAlign: "center",
    backgroundColor: "#474747",
  }
  return ( //returns the table head content
    <thead>
      <tr>
        <th style = {thStyle} > ID </th>
        <th style = {thStyle} > NOME </th>
        <th style = {thStyle} > PREÇO</th>
        <th style = {thStyle} > QUANTIDADE</th>
        <th style = {thStyle} > Remove</th>
      </tr>
    </thead>
  );
}

const TableBody = props => { //tableBody component
  const tdStyle = {
    border: "1px solid white",
    textAlign: "left",
    verticalAlign: "center",
  }
  const buttonStyle = {
    verticalAlign: "center",
    padding: "10px",
    width: "100%",
    
  }
  const product = props.products.map((product, index) => {
    //for each product on products array
    //that will return a line with the table content
    //this has the id, name, price, quantity, and the functon
    //thats change the product quantity
    return(
      <tr key = {index}>
        <td style = {tdStyle}>{product.id}</td>
        <td style = {tdStyle}>{product.name}</td>
        <td style = {tdStyle}>{product.price}</td>
        <td style = {tdStyle}>
            <div>
              {product.quant}
              <button onClick = {()=> props.inventoryControl(index, "+")} >+</button>
              <button  onClick = {()=> props.inventoryControl(index, "-")}>-</button>
            
            </div>
        </td>
        <td style = {tdStyle}><button style = {buttonStyle} onClick = {()=> props.removeProduct(index)}>Remove</button></td>

      </tr>
    )
  });
  return(
    <tbody>
      {product}
    </tbody>
  )
}

class Itens extends React.Component {

  render() {
    //getting the products and functions from the parent
    const { products, removeProduct, inventoryControl } = this.props;
    const tableStyle = {
      borderCollapse: "collapse",
      border: "1px solid white",
      width: "100%",
    }
    return (
      <table style = {tableStyle}>
        <TableHead />
        <TableBody products = { products } inventoryControl = {inventoryControl} removeProduct = {removeProduct} />
      </table>
    )
  }
}
export default Itens