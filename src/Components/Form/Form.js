import React from 'react';
import './Form.css';
import Input from '../Input/Input';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddInput = this.handleAddInput.bind(this);
    }

    handleAddInput() {
        this.props.onAddInput();
    }

    render() {
        return (
            <form>
                {
                    this.props.inputs.map(input => {
                        return (
                            < Input key={input.id} id={input.id} value={input.value} onChange={this.props.onInputChange} />
                        )
                    })
                }
                <button onClick={this.handleAddInput} >Add input</button>
            </form>
        )
    }
}

export default Form;