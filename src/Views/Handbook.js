import React, { Component } from "react";
import { Jumbotron, Container, NavLink } from 'reactstrap';
import Homepage from './Homepage';
import {Results} from '../Results';

const washingtonRights = require('../resources/washington-rights');

export default class Handbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      view: 'Handbook'
    };
  }

  goHome = () => {
    this.setState({view: 'Home'})
  }

  componentWillMount() {
    console.log(this.state.filters);
    console.log(washingtonRights);
  }

  render() {
    let view = (
      <div>
        <Jumbotron className="bg-primary text-white">
          <Container>
            <h1>The Ever Thankful Dropouts</h1>
          </Container>
        </Jumbotron>

        <main>
          <Results items={washingtonRights} />

        </main>
      </div>
    );
    if (this.state.view === 'Home') {
      view = <Homepage />
    }
    return (
      <div>{view}</div>
    );
  }
}