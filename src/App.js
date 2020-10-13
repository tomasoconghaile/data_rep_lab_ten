import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  //whatever is inside the render is what you see
  //inside the render you have the div
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/home' component={Content} extact ></Route>
            <Route path='/read' component={Header} ></Route>
            <Route path='/create' component={Footer} ></Route>
          </Switch>

          
        </div>
      </Router>
    );
  }
}

export default App;
