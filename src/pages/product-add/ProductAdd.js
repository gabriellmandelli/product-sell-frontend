import React, { Component } from 'react';

import './ProductAdd.css';

import connectApi from '../../services/connectApi';

class ProductAdd extends Component {

  state = {
    idReference: '',
    name: '',
    description: '',
    value: '',
    url: '',
  }

  handleSubimit = async event => {

    event.preventDefault();

    const productObject = {
      idReference: +this.state.idReference,
      name: this.state.name,
      description: this.state.description,
      value: +this.state.value,
      url: this.state.url
    }

    await connectApi.post('/product', productObject);

    this.props.history.push('/')
  }

  handleChange = fromProduct => {
    this.setState({ [fromProduct.target.name]: fromProduct.target.value });
  }

  render() {
    return (
      <form id="add-product" onSubmit={this.handleSubimit}>
        <input
          type="number"
          name="idReference"
          placeholder="Código do produto"
          onChange={this.handleChange}
          value={this.state.idReference}
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
          type="number"
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

        <img src={this.state.url} alt="" />
      </form>

    );
  };
}

export default ProductAdd;