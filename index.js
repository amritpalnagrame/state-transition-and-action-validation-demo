const StateMachine = require('./statemachine');
const ActionHandler = require('./actionhandler');

const stateMachine = new StateMachine('./config.json');
const actionHandler = new ActionHandler('./config.json');

let currentState = 'A';
actionHandler.performAction(currentState, 'action1');  // Valid action in state A
actionHandler.performAction(currentState, 'action2');  // Valid action in state A
actionHandler.performAction(currentState, 'action3');  // Invalid action in state A

currentState = stateMachine.transition(currentState, 'B');  // Valid transition
actionHandler.performAction(currentState, 'action1');  // Invalid action in state B
actionHandler.performAction(currentState, 'action2');  // Valid action in state B
actionHandler.performAction(currentState, 'action3');  // Invalid action in state A

currentState = stateMachine.transition(currentState, 'C');  // Valid transition
actionHandler.performAction(currentState, 'action1');  // Invalid action in state C
actionHandler.performAction(currentState, 'action2');  // Invalid action in state C
actionHandler.performAction(currentState, 'action3');  // Valid action in state C

