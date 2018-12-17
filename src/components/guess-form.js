import React from 'react';
import {connect} from 'react-redux';

import './guess-form.css';
import { makeGuess } from '../actions';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(makeGuess(
      event.target.userGuess.value
    ))
    event.target.userGuess.value = '';
    event.target.userGuess.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm)
