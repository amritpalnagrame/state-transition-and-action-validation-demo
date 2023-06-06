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
}
