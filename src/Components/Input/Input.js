import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const id = this.props.id;
        this.props.onChange(id, e.target.value);
    }

    render() {
        return (
            <input className="item-input" type="text" id={this.props.id} value={this.props.value} onChange={this.handleUserInput} required />
        )
    }
}

export default Input;