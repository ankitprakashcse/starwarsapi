import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary">{this.props.btnName}</button>
            </div>
        );
    }
}

export default Button;