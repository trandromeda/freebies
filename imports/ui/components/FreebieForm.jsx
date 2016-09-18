import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FreebieForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
  }

  handleAddressChange(e) {
    this.setState({address: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.address);
  }

  render() {
    return (
      <form className="addressForm" onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          value={this.state.address} 
          onChange={this.handleAddressChange.bind(this)} 
        />
        <input type="submit" value="Post" />
      </form>
      )
  }
}