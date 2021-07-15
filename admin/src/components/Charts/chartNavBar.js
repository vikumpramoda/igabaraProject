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
    <Dropdown.Item href="/Chart3">3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
