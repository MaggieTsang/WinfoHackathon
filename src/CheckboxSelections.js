import React from "react";
import { FormGroup, Label, Input, Col } from 'reactstrap';

export default class CheckboxSelections extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let items = this.props.items.map((item) => {
      return <FormGroup key={item}>{item}</FormGroup>
    });
    return (
      <Col sm="3">
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {items}
          </Label>
        </FormGroup>
      </Col>
    )
  }
}