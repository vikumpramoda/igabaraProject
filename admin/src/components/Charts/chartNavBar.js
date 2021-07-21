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
    <Dropdown.Item href="/pie">1</Dropdown.Item>
    <Dropdown.Item href="/pie2">2</Dropdown.Item>
    <Dropdown.Item href="/breakfastChart">3</Dropdown.Item>
    <Dropdown.Item href="/lunchChart">4</Dropdown.Item>
    <Dropdown.Item href="/dinnerChart">5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
