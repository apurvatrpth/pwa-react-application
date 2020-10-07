import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Users from './components/users';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/users'>Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route component={About} path='/about' />
        <Route component={Users} path='/users' />
        <Route component={Home} path='/' exact />
      </Router>
    </div>
  );
}

export default App;
