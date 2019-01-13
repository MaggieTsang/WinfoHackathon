import React, { Component } from "react";
import { Jumbotron, Container, NavLink } from 'reactstrap';
import Homepage from './Homepage';
import {Results} from '../Results';

const washingtonRights = require('../resources/washington-rights');
const logo = require("../IURAlogo.png")


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
            <img src={logo} onClick={this.goHome}/>
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