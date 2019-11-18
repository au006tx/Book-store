import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/home';
import Books from './screens/books';
import About from './screens/about';



// function App() {
//   return (
  //   <Router>

  //   <div>
      
  //     <Navbar bg="dark" variant="dark">
  //   <Navbar.Brand href="#"><h1> Tarzan Skills Library </h1></Navbar.Brand>
  //   <Nav className="mr-auto">
  //     {/* <Nav.Link href="#home">Home</Nav.Link>
  //     <Nav.Link href="#features">Features</Nav.Link>
  //     <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  //   </Nav>
    
  // </Navbar>
  //     <div style={{paddingLeft:50, paddingRight:50, flexWrap : 'wrap'}}>
     
  //     <Home />
      


  //     </div>
  //   </div>
  //   </Router>
//   );
// }

class App extends React.Component {
  render() {
    return (
    <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/home'>
          <img alt="Brand" src="/logo.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> {' '} <b> Tarzan Skills Library </b>
      
      
      
    </Navbar.Brand>

    <Nav className="mr-auto" style={{display:'flex',justifyContent:'flex-end'}}>

         {/* <Nav.Link href="home">Home</Nav.Link>  */}

          
     <Nav.Link href="about"><b> About </b></Nav.Link> 
   
       <Nav.Link href="books"><b> Books </b></Nav.Link>
    </Nav>
  </Navbar>
    
          
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/books' component={Books} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
