import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';

export default class AddFoodNavbBar extends Component {
    render() {
        return (
            <div>

    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Breakfast / Dinner / Lunch
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/addfoods">Breakfast</Dropdown.Item>
    <Dropdown.Item href="/addDinner">Dinner</Dropdown.Item>
    <Dropdown.Item href="/addLunch">Lunch</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
