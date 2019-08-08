import React, { Component } from 'react';

class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <h1>
                This is Content
                <p>
                    { this.props.title }
                </p>
            </h1>
         );
    }
}
 
export default Content;