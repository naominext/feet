import React from 'react';
import './Results.css';

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
            <div className="Results" style={{ display: this.props.submitted ? 'block' : 'none'}}>
                <h2>And the winner is...</h2>
                <div>
                    <p className="Title">{this.props.winner}</p>
                </div>
                <span className="secondary-btn" onClick={this.handleAppReset} >Start again</span>
            </div>
        )}
}

export default Results;