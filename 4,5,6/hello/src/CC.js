import React, { Component } from "react";
class CC extends React.Component {
  constructor() {
    super();
    this.state = {
      player: "leon",
      country: "US"
    };
  }
  changeCountry=() => {
    this.setState({country:'Japan'})
  }
  render() {
    return (
      <div>
        <h1>Class Component {this.state.player}</h1>
        <h1>The player's name is {this.state.player}</h1>
        <h1>The player's country is {this.state.country}</h1>
        <button onClick={this.changeCountry}>change country</button>
      </div>
    );
  }
}
export default CC;
