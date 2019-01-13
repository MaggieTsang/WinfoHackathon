import React, { Component } from "react";
import { FormGroup, Label, Button, Input, Jumbotron, Container, Row, Col } from 'reactstrap';

import DropdownSelection from '../Controls/DropdownSelection'
import CheckboxSelections from "../CheckboxSelections";



export default class Homepage extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="bg-primary text-white">
          <Container>
            <h1>The Ever Thankful Dropouts</h1>
          </Container>
        </Jumbotron>

        <main>
          <Container></Container>
          <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

          <Container>
            <Row>
              <Col sm="4">
                <DropdownSelection title='Location' items={['Washington']} />
              </Col>
              <Col sm="4">
                <DropdownSelection title='Age Range' items={['0 - 14', '15 - 18', '18 - 21', '21+']} />
              </Col>
              <Col sm="4">
                <DropdownSelection title='Status' items={['US Citizen', 'Visa', 'Green Card']} />
              </Col>
            </Row>



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


            <Button>Submit</Button>

          </Container>

        </main>
      </div>
    );
  }
}