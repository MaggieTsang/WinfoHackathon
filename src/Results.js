import React, { Component } from "react";
import {Container} from 'reactstrap';

export class Results extends Component {
  render() {
    let items = this.props.items;
    items = items.map((mainRight) => {
      return <SingleItem key={JSON.stringify(mainRight)} mainRight={mainRight.type} age={mainRight.age} immigration={mainRight.immigration} info={mainRight.info}  />
    });
    return (
      // <Container>
      //   <h3>Your Civil Rights Information</h3>
      //       <NavLink onClick={this.goHome}>Home</NavLink>
      //       <li><a href="#testHeader">Test Header</a></li>
      //       <li><a href="#">Information Heading here</a></li>
      //       <li><a href="#">Information Heading here</a></li>
      //       <li><a href="#">Information Heading here</a></li>

      //       <br></br>

      //       <h5 id="testHeader">test header</h5>
      //       <p>Rights information</p>

      //       {/* Add to ResultsContent later */}
      // </Container>
      <Container>{items}</Container>
    )
  }
}

class SingleItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.mainRight} rights</h3>
        <li><a href="#">Age: {this.props.age}</a></li>
        <li><a href="#">Immigration Status: {this.props.immigration}</a></li>
        <li>Info: {this.props.info}</li>
      </div>
    )
  }
}