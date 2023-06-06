function StateMachine() {
  const transitions = {
    A: ['B', 'C'],
    B: ['C'],
    C: ['D'],
    D: []
  };

  return {
    transitions
  };
}
