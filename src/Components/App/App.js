import React from 'react';
import './App.css';
import Form from '../Form/Form';

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
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.addInput = this.addInput.bind(this);
  }

  addInput () {
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

  updateInput (id, newValue) {
    let inputs = this.state.inputs;
    let index = id - 1;
    inputs[index].value = newValue;
    this.setState({
      inputs: inputs,
    })
  }

  submitForm() {

  }

  render() {
    return (
      <div className="App">
        <h1>FEET Heading will go here</h1>
        < Form inputs={this.state.inputs} onInputChange={this.updateInput} onAddInput={this.addInput} />
      </div>
    )
  }
}

export default App;