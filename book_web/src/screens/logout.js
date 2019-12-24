import React from 'react';
import { Button } from 'react-bootstrap';
import { updateAuth } from '../actions';
import { connect } from 'react-redux';

import axios from 'axios';

import Login from './login';



class Logout extends React.Component {
    constructor(props){
        super(props);
        this.state = {   
        }
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {      
        axios.post('http://127.0.0.1:8000/rest-auth/logout/')
        .then(res => { 
            this.props.updateAuth();                                        
        }).catch(error => {
            console.log(error);            
        });       
    }

    

  render() {
    return (
        this.props.token ? (
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', width: '100%', height: '50%', margin: '5px' }}>   
                <div style={{ display: 'flex', flexDirection: 'row', width: '70%', height: '600px'}}>
                    <img src="/logout.png" alt="base" width='100%' height='100%'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '500px', justifyContent: 'center', margin: '5px'}}>
                    <div className='inner-content'>
                        <h2 style={{color: 'grey', display: 'flex', justifyContent:'center'}}> Logout </h2>    
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button className='inner-content' variant="outline-secondary" type="submit" onClick={this.onLogout} >
                                Logout
                        </Button>
                    </div>
                </div>       
            </div>   
        ):(       
        <Login />
        )
    );
  }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps, { updateAuth })(Logout);

