function StateMachine() {
  const transitions = {
    A: ['B', 'C'],
    B: ['C'],
    C: ['D'],
    D: []
  };

  function isValidTransition(currentState, nextState) {
    const allowedStates = transitions[currentState] || [];
    return allowedStates.includes(nextState);
  }

  return {
    isValidTransition
  };
}
