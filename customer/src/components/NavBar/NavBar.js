import React, { Component } from 'react'
import {Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';




export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">igabara Hobbit House |</Navbar.Brand>
    <Nav className="mr-auto">


      <Nav.Link href="/homepage">Home</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
      
      <Nav.Link href="/calendar"> Reservation Calendar </Nav.Link>
     
      
      <Nav.Link href="/guest">GuestDetails</Nav.Link>
      <Nav.Link href="/PackageList">Package Selection</Nav.Link>
      <Nav.Link href="/viewFoods">Food Selection</Nav.Link>
      
      <Nav.Link href="/feedback">Feedback</Nav.Link>
      <Nav.Link href="/map">Location</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  
  </Navbar>
  
            </div>

            
        )
    }
}
