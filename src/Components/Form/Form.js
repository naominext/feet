import React from 'react';
import './Form.css';
import Input from '../Input/Input';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddInput = this.handleAddInput.bind(this);
        this.handleRemoveInput = this.handleRemoveInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddInput() {
        this.props.onAddInput();
    }

    handleRemoveInput() {
        this.props.onRemoveInput();
    }

    handleSubmit() {
        this.props.onSubmit();
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
                <div className="add-remove">
                    <a href="#" onClick={this.handleAddInput} >Add item</a>
                    <a style={{ display: this.props.inputs.length > 2 ? 'inline' : 'none' }} href="#" onClick={this.handleRemoveInput} >Remove item</a>
                </div>
                <a id="submit" href="#" onClick={this.handleSubmit}>Decide for me</a>
            </form>
        )
    }
}

export default Form;