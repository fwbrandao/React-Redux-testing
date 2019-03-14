/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { Component } from 'react';

class Switch extends Component {


    state = {  }

    toggleColor() {

        switch (Colors) {
            case BLUE:
                <div className="blue"></div>
                break;
            case RED:
                <div className="red"></div>
                break;
            case YELLOW:
                <div className="yellow"></div>
                break;
            default:
                console.log('Other Color');
                break;
        }
    }
    render() {
        return (<div>
            <button onClick={this.toggleColor}></button>
        </div>
        );
    }
}

export default Switch;