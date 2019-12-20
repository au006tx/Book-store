import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            password1 : '',
            password2 : '',
            users : [],
        }
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup() {
        let newuser = {
            username: this.state.username,
            email: this.state.email,
            password1 : this.state.password1,
            password2 : this.state.password2,

        };
        axios.post("http://127.0.0.1:8000/rest-auth/registration/", newuser)
        .then(data => {
            this.setState({
                users : [...this.state.username, ...this.state.email, ...this.state.password1, 
                            ...this.state.password2, newuser]
            });                
        }) 
        
    }

  render() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', width: '100%', height: '50%',}}>   
            <div style={{ display: 'flex', flexDirection: 'row', width: '70%', height: '600px'}}>
                <img src="/signup.jpg" alt="base" width='100%' height='100%'/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '500px', justifyContent: 'center', margin: '5px'}}>
                <div className='inner-content'>
                    <h2 style={{color: 'grey', display: 'flex', justifyContent:'center'}}> Signup </h2>    
                </div>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={(event) => this.setState({username : event.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>  
                </Form>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button className='inner-content' variant="outline-secondary" type="submit" onClick={this.onSignup}>
                            Signup
                    </Button>
                </div>
            </div>
        
        </div>
    );
  }
}

export default Signup;