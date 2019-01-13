import React, { Component } from 'react';
//import { } from 'reactstrap';

export default class ResultsContent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let items = this.props.items.map((item) => {
      return <div key={item}>{item}</div>
    });
    return (
      <div>
        <h5 id={this.props.header}>{header}</h5>
        <p>{this.props.information}</p>
        <br></br>
      </div>
    )
  }
}