import React, { Component } from 'react';

import './ProductAdd.css';

class ProductAdd extends Component {

  state = {
    idProduct: null,
    name: '',
    description: '',
    value: '',
    url: '',
  }

  handleSubimit = async e => {
    e.preventDefault();

    const newProduct = new FormData();

    newProduct.append('idProduct', this.state.idProduct);
    newProduct.append('name', this.state.name);
    newProduct.append('description', this.state.description);
    newProduct.append('value', this.state.value);
    newProduct.append('url', this.state.url);

    console.log(newProduct);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id="add-product" onSubmit={this.handleSubimit}>
        <input
          type="number"
          name="idProduct"
          placeholder="Código do produto"
          onChange={this.handleChange}
          value={this.state.idProduct}
        />

        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do produto"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="text"
          name="value"
          placeholder="Valor do produto"
          onChange={this.handleChange}
          value={this.state.value}
        />

        <input
          type="text"
          name="url"
          placeholder="Link da imagem do produto"
          onChange={this.handleChange}
          value={this.state.url}
        />

        <button type="submit">Cadastrar</button>

      </form>
    );
  };
}

export default ProductAdd;