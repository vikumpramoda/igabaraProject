import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';

export default class ChartsNavbBar extends Component {
    render() {
        return (
            <div>

    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Charts
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/pie">1 - Analysis of demand for Hobbit Houses</Dropdown.Item>
    <Dropdown.Item href="/packageLine">2 - Analysis of demand for Package Rate </Dropdown.Item>
    <Dropdown.Item href="/packageBar">3 - Analysis of demand for Package Rate (Bar Chart) </Dropdown.Item>
    <Dropdown.Item href="/breakfastChart">4 - Breakfast Analysis Chart</Dropdown.Item>
    <Dropdown.Item href="/lunchChart">5 - Lunch Analysis Chart</Dropdown.Item>
    <Dropdown.Item href="/dinnerChart">6 - Dinner Analysis Chart</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
