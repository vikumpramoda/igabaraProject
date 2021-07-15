import React, { Component } from 'react'
import { Dropdown,Button } from 'react-bootstrap';

export default class NewIgabara extends Component {
    render() {
        return (
            <div>

<Dropdown>
  <Button variant="success">--You Can Select Your Favourite Igabara Hobbit House -- </Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="/calendar">igabara Brown</Dropdown.Item>
    <Dropdown.Item href="/calendar2">igabara Pink</Dropdown.Item>
    <Dropdown.Item href="/calendar3">igbara Green</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
