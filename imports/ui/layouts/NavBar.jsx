import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="center title"><h1>{this.props.title}</h1></div>
        </div>
      </nav>
    )
  }

};