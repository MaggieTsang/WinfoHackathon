import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Media, Button, Card, CardTitle, CardText, Jumbotron, Container, Row, Col } from 'reactstrap';

import DropdownSelection from '../Controls/DropdownSelection'
import CheckboxSelections from "../CheckboxSelections";
import { ROUTES } from "../constants";
import Handbook from "./Handbook";

const logo = require("../IURAlogo.png")

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['Location', 'Age Range', 'Status', 'Language'],
      view: 'Homepage'
    };
  }

  handleDropdownData = (index, value) => {
    let newData = this.state.data.slice();
    newData[index] = value;
    this.setState({ data: newData });
  }

  showHandbook = () => {
    this.setState({ view: 'Handbook' })
  }

  goHome = () => {
    this.setState({view: 'Home'})
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
          <Container></Container>
          <div className="container">
            <h3>Learn your civil rights based on your Location, Age Range, and Immigration Status! Check the categories you want to learn about.</h3>
          </div>

          <br></br>


          <Container>
            <Row className='dropdowns'>
              <Col sm="3">
                <DropdownSelection title={this.state.data[0]} items={['Washington']} handleDropdownData={this.handleDropdownData} index={0} />
              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[1]} items={['0 - 14', '15 - 18', '18 - 21', '21+']} handleDropdownData={this.handleDropdownData} index={1} />
              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[2]} items={['US Citizen', 'Visa', 'Green Card']} handleDropdownData={this.handleDropdownData} index={2} />

              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[3]} items={['English', 'Vietnamese', 'Spanish', 'Arabic', 'Somali', 'Chinese']} handleDropdownData={this.handleDropdownData} index={3} />

              </Col>
            </Row>

            <br></br>

            <Row>
              <CheckboxSelections title='All' items={['All']} />
              <CheckboxSelections title='Healthcare' items={['Healthcare']} />
              <CheckboxSelections title='Education' items={['Education']} />
              <CheckboxSelections title='Criminal Justice' items={['Criminal Justice']} />
              <CheckboxSelections title='Racial Justice' items={['Racial Justice']} />
              <CheckboxSelections title='Free Speech' items={['Free Speech']} />
              <CheckboxSelections title='Gender Equity' items={['Gender Equity']} />
              <CheckboxSelections title='Voting Rights' items={['Voting']} />
              <CheckboxSelections title='Housing Rights' items={['Housing']} />
              <CheckboxSelections title='Freedom of Religion' items={['Freedom of Religion']} />
              <CheckboxSelections title='LBGT Rights' items={['LBGT Rights']} />
              <CheckboxSelections title='Business Rights' items={['Business Rights']} />
              <CheckboxSelections title='Immigration Rights' items={['Immigration Rights']} />
            </Row>


            <Row>
              <Col sm="6">
                <Card >
                  <Button onClick={this.showHandbook} color='success'>Read the handbook</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card >
                  <Button color='success'>Take the quiz!</Button>
                </Card>
              </Col>
            </Row>
          </Container>


        </main>
      </div>
    );
    if (this.state.view === 'Handbook') {
      view = <Handbook filters={this.state.data} />
    }
    return (
      <div>{ view }</div>
      
    );
  }
}