const fs = require('fs');

class StateMachine {
  constructor(configFile) {
    const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
    this.states = config;
  }

  isValidTransition(currentState, nextState) {
    const allowedStates = this.states[currentState]?.transitions || [];
    return allowedStates.includes(nextState);
  }

  transition(currentState, nextState) {
    if (this.isValidTransition(currentState, nextState)) {
      console.log(`Transition from ${currentState} to ${nextState}`);
      return nextState;
    } else {
      console.log(`Invalid transition from ${currentState} to ${nextState}`);
      return currentState;
    }
  }
}

// Usage example
const stateMachine = new StateMachine('./config.json');
let currentState = 'A';

currentState = stateMachine.transition(currentState, 'B');  // Valid transition
currentState = stateMachine.transition(currentState, 'C');  // Valid transition
currentState = stateMachine.transition(currentState, 'D');  // Valid transition
currentState = stateMachine.transition(currentState, 'B');  // Invalid transition, stays in C

console.log({ currentState });

module.exports = StateMachine;
