import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th> ID </th>
        <th> NOME </th>
        <th> PREÇO</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const product = props.products.map((product, index) => {
    return(
      <tr key = {index}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><button onClick = {()=> props.removeProduct(index)}>Remove</button></td>

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

    const { products, removeProduct } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody products = { products } removeProduct = {removeProduct} />
      </table>
    )
  }
}
export default Itens