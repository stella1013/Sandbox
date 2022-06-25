//State Machine Definition Object
function createMachine(stateMachineDefinition) {
    const machine = {
      // machine object
    }
    return machine
  }
  
  // here's how we'll create the state machine
  const machine = createMachine({
    // state machine definition object here...
  })
  
  // here's how we use the state machine
  // comments are what we _want_ to have logged
  let state = machine.value
  console.log(`current state: ${state}`) // current state: off
  
  state = machine.transition(state, 'switch')
  console.log(`current state: ${state}`) // current state: on
  
  state = machine.transition(state, 'switch')
  console.log(`current state: ${state}`) // current state: off