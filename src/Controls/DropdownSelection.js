import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropdownSelection extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleDropdownData = (event) => {
    this.props.handleDropdownData(this.props.index, event.target.innerHTML);
  }

  render() {
    let items = this.props.items.map((item) => {
      return <DropdownItem onClick={this.handleDropdownData} key={item}>{item}</DropdownItem>
    });
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color='secondary' caret>
          {this.props.title}
        </DropdownToggle>
        <DropdownMenu>
          {items}
        </DropdownMenu>
      </Dropdown>
    )
  }
}