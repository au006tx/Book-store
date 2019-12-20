import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/home';
import Books from './screens/books';
import About from './screens/about';
import Contact from './screens/contact';
import Login from './screens/login';
import Signup from './screens/signup';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated : false,
    }
  }
  render() {
    return (
    <Router>
        <div>
          <Navbar style={{backgroundColor:"#3498DB"}} variant="dark">
            <Navbar.Brand href='/'>
              <img alt="Brand" src="/logo.ico" width="30" height="30" className="d-inline-block align-top" /> 
                {' '} <b> Tarzan Skills Library </b>
            </Navbar.Brand>
            <Nav className="mr-auto" style={{display:'flex',justifyContent:'flex-end'}}>
              {!this.state.isAuthenticated ? (
                  <Nav.Link href="login"><b> Login </b></Nav.Link>
              ) : (
                <div>
                                      <Nav.Link href="Logout"><b> Logout </b></Nav.Link>

                </div>
              )}
              <Nav.Link href="books"><b> Books </b></Nav.Link>
            </Nav>
          </Navbar>
    
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />


              <Route exact path='/books' component={Books} />
              {/* <Route path='/about' component={About} /> */}
              {/* <Route path='/contact' component={Contact} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
