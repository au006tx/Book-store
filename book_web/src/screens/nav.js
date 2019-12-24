import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { updateAuth } from '../actions';
import { connect } from 'react-redux';


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(    
            <Navbar style={{backgroundColor:"#3498DB"}} variant="dark">
                <Navbar.Brand href='/'>
                  <img alt="Brand" src="/logo.ico" width="30" height="30" className="d-inline-block align-top" /> 
                    {' '} <b> Tarzan Skills Library </b>
                </Navbar.Brand>
                <Nav className="mr-auto" style={{display:'flex',justifyContent:'flex-end'}}> 
                    {(!this.props.token ? (
                        <Nav.Link href="login"><b> Login </b></Nav.Link>
                        ):(
                        <Nav.Link href="logout"><b> Logout </b></Nav.Link>
                        )
                    )}
                    <Nav.Link href="books"><b> Books </b></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps, { updateAuth })(NavBar);

