import React from 'react';
import './App.css';
import ProfileHeader from './components/Layout/profile-header'
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar>
        <ProfileHeader></ProfileHeader>
      </Navbar>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Collect</Nav.Link>
            <Nav.Link href="#link">Filter</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">Visualize</Nav.Link>
            <Nav.Link href="#link">Act</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
