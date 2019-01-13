import React, { Component } from "react";
import {Jumbotron, Container } from 'reactstrap';

export default class SelectionResults extends Component {
componentWillMount(){
  console.log("Filter json file here and display")
}

  render() {
    return (
      <div>
        <Jumbotron className="bg-primary text-white">
          <Container>
            <h1>The Ever Thankful Dropouts</h1>
          </Container>
        </Jumbotron>

        <main>
          <Container>
            <h3>Your Civil Rights Information</h3>
            <li><a href="#testHeader">Test Header</a></li>
            <li><a href="#">Information Heading here</a></li>
            <li><a href="#">Information Heading here</a></li>
            <li><a href="#">Information Heading here</a></li>

            <br></br>

            <h5 id="testHeader">test header</h5>
            <p>Rights information</p>

            {/* Add to ResultsContent later */}

          </Container>

        </main>
      </div>
    );
  }
}