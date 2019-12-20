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
                <CardGroup style={{paddingTop:20, paddingLeft:10, paddingRight:10, alignContent: 'center'}}>
                    <Card style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
                        <Card.Img variant="top" style={{width: 200, height: 200}} src={item.get_image} />
                        <Card.Body>
                            <Card.Title style={{ flexWrap: "wrap", width: 200}} > <b> {item.book_name} </b> </Card.Title>
                            <Card.Text>
                                <Button variant="info">  <a style={{textDecoration: 'none', color: 'white'}} href={item.get_pdf}>Download</a></Button>                                </Card.Text>
                        </Card.Body>
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
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', width: '70%', height: '600px', marginTop:'50px'}}>
                            <img src="/noauth.png" alt="base" width='80%' height='80%'/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '500px', justifyContent: 'center'}}>
                            <div className='inner-content'>
                                <h5 style={{color: 'grey'}}> Sorry, you are not authorized to access this page. </h5>  
                                <h6 style={{color: 'grey'}}> Please <a href='/login'> Login  </a></h6>  

                     
 
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


