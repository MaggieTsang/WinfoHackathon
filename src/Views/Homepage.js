import React, { Component } from "react";
import { Button, Card, CardTitle, CardText, Jumbotron, Container, Row, Col } from 'reactstrap';

import DropdownSelection from '../Controls/DropdownSelection'

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['Location', 'Age Range', 'Status', 'Language']
    };
  }

  handleDropdownData = (index, value) => {
    let newData = this.state.data.slice();
    newData[index] = value;
    this.setState({data: newData});
  }

  showHandbook = () => {
    console.log(this.state);
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
          <Container></Container>
          <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

          <Container>
            <Row className='dropdowns'>
              <Col sm="3">
                <DropdownSelection title={this.state.data[0]} items={['Washington']} handleDropdownData={this.handleDropdownData} index={0}/>
              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[1]} items={['0 - 14', '15 - 18', '18 - 21', '21+']} handleDropdownData={this.handleDropdownData} index={1} />
              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[2]} items={['US Citizen', 'Visa', 'Green Card']}  handleDropdownData={this.handleDropdownData} index={2}/>
                
              </Col>
              <Col sm="3">
                <DropdownSelection title={this.state.data[3]} items={['English', 'Vietnamese', 'Spanish', 'Arabic', 'Somali', 'Chinese']}  handleDropdownData={this.handleDropdownData} index={3}/>
                
              </Col>
            </Row>



            {/* <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out
          </Label>
              </FormGroup> */}


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
  }
}