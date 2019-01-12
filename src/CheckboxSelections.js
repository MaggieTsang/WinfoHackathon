import React from "react";
import { FormGroup, Label, Button } from 'reactstrap';

export default class CheckboxSelections extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = this.props.items.map((item) => {
      return <FormGroup key={item}>item</FormGroup>
    });
    return (
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          this.props.topic
        </Label>
      </FormGroup>
    )
  }
}