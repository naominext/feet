import React from 'react';
import './Results.css';
import Ticket from '../Ticket/Ticket.js';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.handleAppReset = this.handleAppReset.bind(this);
    }

    handleAppReset() {
        this.props.onAppReset();
    }

    render() {
        return (
            <div className="Results" style={{ display: this.props.submitted ? 'inline-block' : 'none'}}>
                <h2>Winner!</h2>
                <p><span className="Title">{this.props.winner}</span></p>
                <Ticket winner={this.props.winner}/>
                <span onClick={this.handleAppReset} >Reset</span>
            </div>
        )}
}

export default Results;