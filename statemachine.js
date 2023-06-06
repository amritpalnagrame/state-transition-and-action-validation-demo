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
