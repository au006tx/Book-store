import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';
// import { connect } from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import Home from './screens/home';
import Books from './screens/books';
import Login from './screens/login';
import Signup from './screens/signup';

import history from './history';

import store from './store';
let persistor = persistStore(store)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
       
              <Navbar style={{backgroundColor:"#3498DB"}} variant="dark">
                <Navbar.Brand href='/'>
                  <img alt="Brand" src="/logo.ico" width="30" height="30" className="d-inline-block align-top" /> 
                    {' '} <b> Tarzan Skills Library </b>
                </Navbar.Brand>
                <Nav className="mr-auto" style={{display:'flex',justifyContent:'flex-end'}}>                   
                  {this.props.token ? 
                  <Nav.Link href="login"><b> Login </b></Nav.Link>
                  : null
                  }
                  <Nav.Link href="books"><b> Books </b></Nav.Link>
                </Nav>
              </Navbar>  
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/books' component={Books} />
              </Switch>
    
          </Router>
        </PersistGate>
    </Provider>

    );
  }
}


export default App;
