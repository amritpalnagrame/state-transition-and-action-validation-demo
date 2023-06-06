class ActionHandler {
  constructor() {
    this.actionsByState = {
      A: ['action1', 'action2'],
      B: ['action2'],
      C: ['action3']
    };
  }

  isValidAction(state, action) {
    const allowedActions = this.actionsByState[state] || [];
    return allowedActions.includes(action);
  }
}

module.exports = ActionHandler;
