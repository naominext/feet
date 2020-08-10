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

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form style={{ display: this.props.submitted ? 'none' : 'flex' }} onSubmit={this.handleSubmit}>
                {
                    this.props.inputs.map(input => {
                        return (
                            < Input key={input.id} id={input.id} value={input.value} onChange={this.props.onInputChange} />
                        )
                    })
                }
                <div className="add-remove">
                    <span style={{ display: this.props.inputs.length > 2 ? 'inline-block' : 'none' }} href="#" onClick={this.handleRemoveInput} >&#45;</span>
                    <span href="#" onClick={this.handleAddInput} >&#43;</span>
                </div>
                <input type="submit" id="submit" value="Make my pick" />
            </form>
        )
    }
}

export default Form;