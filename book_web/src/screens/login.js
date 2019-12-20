import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', width: '100%', height: '50%', margin: '5px' }}>   
            <div style={{ display: 'flex', flexDirection: 'row', width: '70%', height: '600px'}}>
                <img src="/login.jpg" alt="base" width='100%' height='100%'/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '500px', justifyContent: 'center', margin: '5px'}}>
                <div className='inner-content'>
                    <h2 style={{color: 'grey', display: 'flex', justifyContent:'center'}}> Login </h2>    
                </div>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>                     
                </Form>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button className='inner-content' variant="outline-secondary" type="submit">
                            Login
                    </Button>
                </div>
                <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
                    <h6 style={{color: 'grey', display: 'flex', justifyContent:'center'}}> New user? {' '} <a href='/signup'> Signup here </a></h6>
                </div>
            </div>
        
        </div>
    );
  }
}

export default Login;