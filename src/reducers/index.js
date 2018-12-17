import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from '../actions';

const initialState={
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}