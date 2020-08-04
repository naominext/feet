import React from 'react';
import './Form.css';
import Input from '../Input/Input';

class Form extends React.Component {
    renderAction() {
        return (
                < Input />
        )
    }

    render() {
        return (
            <form>
                {this.renderAction()}
                {this.renderAction()}
            </form>
        )
    }
}

export default Form;