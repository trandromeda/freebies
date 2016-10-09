import React, { Component } from 'react';
import { render } from 'react-dom';

export default class AddFreebieButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
  }

  handleAddressChange(e) {
    this.setState({address: e.target.value});
  }

// open up confirmation modal
// instead of an input it should be a button
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.address);

  }

  render() {
    return (
      <form className="address-form" onSubmit={this.handleSubmit.bind(this)}>
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