const fs = require('fs');

class ActionHandler {
  constructor(configFile) {
    const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
    this.actionsByState = config;
  }

  isValidAction(state, action) {
    const allowedActions = this.actionsByState[state].actions || [];
    return allowedActions.includes(action);
  }
}

module.exports = ActionHandler;
