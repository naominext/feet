import React from 'react';
import './App.css';
import Form from '../Form/Form';
import Logo from '../Logo/Logo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      inputs: [
        {
          id: 1,
          value: '',
        },
        {
          id: 2,
          value: '',
        }
      ],
      winner: {},
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  addInput() {
    let inputs = this.state.inputs;
    let nextId = inputs.length + 1;
    inputs.push({
      id: nextId,
      value: '',
    })
    this.setState({
      inputs: inputs,
    })
  }

  removeInput() {
    let inputs = this.state.inputs;
    if (inputs.length > 2) {
      inputs.pop();
      this.setState({
      inputs: inputs,
    })
    }
  }

  updateInput(id, newValue) {
    let inputs = this.state.inputs;
    let index = id - 1;
    inputs[index].value = newValue;
    this.setState({
      inputs: inputs,
    })
  }

  submitForm() {
    let inputs = this.state.inputs;
    let winner = Math.floor(Math.random() * inputs.length);
    console.log(winner);
    this.setState({
      formSubmitted: true,
      winner: inputs[winner],
    })
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <h1>The one to watch?</h1>
        < Form inputs={this.state.inputs} onInputChange={this.updateInput} onAddInput={this.addInput} onRemoveInput={this.removeInput} onSubmit={this.submitForm} />
      </div>
    )
  }
}

export default App;