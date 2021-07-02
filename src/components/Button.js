import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={() => this.props.action(this.props.symbole)} >{this.props.symbole}</button>
            </div>
        );
    }
}
export default Button;