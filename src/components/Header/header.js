import React, { Component } from 'react';

class Header extends Component {
    state = {
        count: 0
    }
    render() {
        setTimeout(() => {
            this.setState(
                {
                    count: this.state.count + 1
                }
            )
           
        }, 1000
        );
        return (
            <h1>
                TIme is Running { this.state.count}
            </h1>
        );
    }
}

export default Header;