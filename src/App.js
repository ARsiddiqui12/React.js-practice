import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  Styling = {

  	color:'green',
  	
  	display:'block'
            
            };

  render() {
    return (
      <a href={this.props.linkurl} style={this.Styling}>{this.props.linktext}</a>
    );
  }
}

export default App;
