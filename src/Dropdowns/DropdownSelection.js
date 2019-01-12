import {React, Component} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropdownSelection extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  render() {
    let items = this.props.items.map((item) => {
      return <DropdownItem key={item}>item</DropdownItem>
    });
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          this.props.title
      </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{items}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}