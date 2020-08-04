import React from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      items: [],
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {

  }

  render() {
    return (
      <div className="App">
        <h1>FEET Heading will go here</h1>
        < Form />
      </div>
    )
  }
}

export default App;