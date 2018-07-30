import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  state = {
    text: ''
  }

  addReminder(){
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders(){
    const { reminders } = this.props;
    return <ul className="list-group col-sm-4">
      {
        reminders.map( reminder => {
          return <li key={reminder.id} className="list-group-item">
            <div className="list-item">{reminder.text}</div>
            <div
              onClick={() => this.deleteReminder(reminder.id)}
              className="list-item delete-button">
              &#x2715;
            </div>
          </li>
        })
      }
    </ul>
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
      { this.renderReminders() }
    </div>
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
