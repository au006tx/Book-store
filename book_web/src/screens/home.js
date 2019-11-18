import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start',
            flexDirection: 'row',
            width: '100%',
            height: '50%',
             }}>   
        <div style={{ display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '500px',
    justifyContent: 'flex-end'}}>
            <div class='inner-content'>
                
            </div>

        </div>
        <div style={{ display: 'flex',
    flexDirection: 'row',
    width: '70%',
    height: '600px'}}>
            <img src="/land.jpg" alt="base" width='100%' height='100%'/>
        </div>
    </div>
    );
  }
}

export default Home;