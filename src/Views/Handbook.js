import React, { Component } from "react";
import { Jumbotron, Container } from 'reactstrap';

const washingtonRights = require('../resources/washington-rights');

export default class Handbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters
    };
  }

  componentWillMount() {
    console.log(this.props);
    console.log(washingtonRights);
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