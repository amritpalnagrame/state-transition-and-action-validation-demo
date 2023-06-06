class StateMachine {
  constructor() {
    this.transitions = {
      A: ['B', 'C'],
      B: ['C'],
      C: ['D'],
      D: []
    };
  }

  isValidTransition(currentState, nextState) {
    const allowedStates = this.transitions[currentState] || [];
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
const stateMachine = new StateMachine();
let currentState = 'A';

currentState = stateMachine.transition(currentState, 'B');  // Valid transition
currentState = stateMachine.transition(currentState, 'C');  // Valid transition
currentState = stateMachine.transition(currentState, 'D');  // Valid transition
currentState = stateMachine.transition(currentState, 'B');  // Invalid transition, stays in C

console.log({ currentState });

module.exports = StateMachine;
