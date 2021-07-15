import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';

export default class ViewFoodNavbBar extends Component {
    render() {
        return (
            <div>

    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Breakfast / Dinner / Lunch
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/foodList">Breakfast</Dropdown.Item>
    <Dropdown.Item href="/dinnerList">Dinner</Dropdown.Item>
    <Dropdown.Item href="/lunchList">Lunch</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
