import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
  state = {
    text: ''
  }

  addReminder(){
    this.props.addReminder(this.state.text);
  }

  render(){
    return <div className="App">
      <div className="title">
        Reminder pro
      </div>
      <div className="form-inline">
        <div className="form-gruop">
          <input
            className="form-control"
            placeholder="I have to..."
            onChange={event => this.setState({text: event.target.value})}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add reminder
          </button>
        </div>
      </div>
    </div>
  }
}

export default connect(null, { addReminder })(App);
