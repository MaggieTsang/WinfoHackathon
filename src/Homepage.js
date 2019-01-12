import React from "react";
import { FormGroup, Label, Button, Input, Jumbotron, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import DropdownSelection from './Dropdowns/DropdownSelection'



export default class Homepage extends React.Component {

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
                <DropdownSelection title='Location' items={['Washington']}/>
              </Col>
              <Col sm="4">
                  <DropdownSelection title='Age Range' items={['0 - 14', '15 - 18', '18 - 21', '21+']}/>
                </Col>
                <Col sm="4">
                  <DropdownSelection title='Status' items={['US Citizen', 'Visa', 'Green Card']}/>
                </Col>
            </Row>



              {/* <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out
          </Label>
              </FormGroup> */}


              <Button>Submit</Button>

          </Container>

        </main>
      </div>
        );
      }
}