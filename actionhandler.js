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

  performAction(state, action) {
    if (this.isValidAction(state, action)) {
      console.log(`Performing ${action} in state ${state}`);
    } else {
      console.log(`Invalid action ${action} in state ${state}`);
    }
  }
}

module.exports = ActionHandler;
