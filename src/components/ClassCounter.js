import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handleIncrease}>Increment</button>
          <button onClick={this.handleDecrease}>Decrement</button>
        </div>
      </div>
    );
  }
}
