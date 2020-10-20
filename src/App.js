import React from 'react';
import './App.css';
//including the Content component 
import { Content } from './components/content';
//including the Footer component 
import { Footer } from './components/footer';
//including the Header component 
import { Header } from './components/header';

//importing bootstrap - shows the entire content on that for every page 
import 'bootstrap/dist/css/bootstrap.min.css';
//importing navbar that allows the navbar to work and be displayed 
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';

//change from function to class
//In order to be a component it will have to extend React.Component
class App extends React.Component {

  //whatever is inside the render is what you see
  //inside the render you have the div

  //NavBar that allows you to change pages
  //NavBar - "Nav.Link href" must be the same as the "Route path" in order to work
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
            <Route path='/read' component={Read} ></Route>
            <Route path='/create' component={Create} ></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
