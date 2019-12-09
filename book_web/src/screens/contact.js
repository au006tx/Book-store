import React from 'react';

import axios from 'axios';
import { Button, Card, CardGroup } from 'react-bootstrap';



class Contact extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : []    
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/users/")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    users: data
                }); 
            });
    }

    allUsersData() {
        return this.state.users.map((item,index) => (            
            <div key={index}>
             
               
                <CardGroup style={{paddingTop:20, paddingLeft:10, paddingRight:10, alignContent: 'center'}}>
                    <Card style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
                        <Card.Body>
                            <Card.Title style={{ flexWrap: "wrap", width: 200}} > <b> {item.username} </b> </Card.Title>
                        </Card.Body>
                       
                    </Card>
                </CardGroup>
               
                
            </div>  
            )            
        )
    }

    render(){    
        return(
            <div> 
                <div style={{display: 'flex',justifyContent:'space-between',flexDirection:'row', flexWrap: "wrap"}}>
                    {this.allUsersData()}
                </div>
            </div>
        )
    };
}

export default Contact;
