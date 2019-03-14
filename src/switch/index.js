import React, { Component } from 'react';

class Switch extends Component {

    state = {  }

    toggleColor(colors) {
        switch (colors) {
            case "BLUE":
                return <div className="blue"></div>
            case "RED":
                return <div className="red"></div>
            case "YELLOW":
                return <div className="yellow"></div>
            default:
                console.log('Other Color');
                break;
        }
    }
    render() {
        return (<div {...this.toggleColor()}>
            <button onClick={this.toggleColor()}></button>
        </div>
        );
    }
}

export default Switch;