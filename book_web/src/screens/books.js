import React from 'react';

import axios from 'axios';
import { Button, Card, CardGroup } from 'react-bootstrap';



class Books extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            books : [],
            isAuthenticated : false,    
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/books/")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    books: data
                }); 
            });
    }

    alldata() {
        return this.state.books.map((item,index) => (            
            <div key={index}>
                {/* <h1>
                {item.book_name}
                </h1>
                <div>    
                    <img src={item.get_image} alt='book_image' style={{width: 200, height:250}}/>
                    <a href={item.get_pdf}> Download </a>                    
                </div> */}

                  {/* <Media style={{paddingBottom:50, paddingTop:20}}>
                    <img width={200} height={250} className="mr-3" src={item.get_image} alt="Book Image"/>
                    <Media.Body>
                        <h5> <b> {item.book_name} </b></h5>
                        <Button variant="info">  <a style={{textDecoration: 'none', color: 'white'}} href={item.get_pdf}>Download</a></Button>
                        <div style={{backgroundColor: '', width:100}}>    
                        </div>
                    </Media.Body>
                </Media> */}
               
                <CardGroup style={{paddingTop:20, paddingLeft:10, paddingRight:10, alignContent: 'center'}}>
                    <Card style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
                        <Card.Img variant="top" style={{width: 200, height: 200}} src={item.get_image} />
                        <Card.Body>
                            <Card.Title style={{ flexWrap: "wrap", width: 200}} > <b> {item.book_name} </b> </Card.Title>
                            <Card.Text>
                                <Button variant="info">  <a style={{textDecoration: 'none', color: 'white'}} href={item.get_pdf}>Download</a></Button>                                </Card.Text>
                        </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                    </Card>
                </CardGroup>
               
                
            </div>  
            )            
        )
    }

    


    render(){
        console.log('Fetching....')
        // const books= this.state.books; 
        // console.log(books)       
        return(
            <div>
                {!this.state.isAuthenticated ? (
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', width: '100%', height: '50%',}}>   
                <div style={{ display: 'flex', flexDirection: 'row', width: '70%', height: '600px'}}>
                    <img src="/lost.png" alt="base" width='100%' height='100%'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '500px', justifyContent: 'center'}}>
                    <div class='inner-content'>
                        <h2 style={{color: 'grey'}}> Please make sure you are logged in !! </h2>
                        
                        
                    </div>
                </div>
            
            </div>
                ) : (
                <div>
                    <div style={{display: 'flex',justifyContent:'flex-start',flexDirection:'row', flexWrap: "wrap"}}>
                        {this.allstudents()}
                    </div>     
                </div>
                )}      
            </div>

        )
    };
}

export default Books;


