import React from 'react';

import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            books : []    
        }
    }
    // componentDidMount() {
    //     console.log('Fetching.....');
    //     fetch("http://127.0.0.1:8000/crm_app/", {
    //         method: 'GET',
    //         mode: 'no-cors',
    //     }).then(response => response.json()).then(data => {
    //             this.setState({
    //                 customer : data
    //             });
    //             console.log(data);
    //         })  
    //         .catch((e) => {
    //             console.log('Looks like there was a problem: \n', e);
    //         });
    // }; 

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
                <h1 style={{color: 'red'}}>
                {item.book_name}
                </h1>
                <div>
                    <h1>
                        {item.book_price}
                    </h1>
                    <img src={item.book_image} alt='book_image' />
                </div>
            </div>  
            )            
        )
    }

    render(){
        console.log('Fetching....')
        const books= this.state.books; 
        console.log(books)       
        return(
            <div >
                <h2 > Data </h2>
                    <div>
                        {this.alldata()}
                    </div>
            </div>
        )
    };
}

export default Home;
