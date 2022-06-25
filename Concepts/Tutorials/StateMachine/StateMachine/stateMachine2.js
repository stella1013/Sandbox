function createMachine(stateMachineDefinition) {
    const machine = {
      // machine object
      value: stateMachineDefinition.initialState,
      transition(currentState, event) {
        const currentStateDefinition = stateMachineDefinition[currentState];
        const destinationTransition = currentStateDefinition.transitions[event];
        
        if (!destinationTransition) {
            return
          }
          const destinationState = destinationTransition.target
          const destinationStateDefinition =
            stateMachineDefinition[destinationState]
    
          destinationTransition.action();
          currentStateDefinition.actions.onExit();
          destinationStateDefinition.actions.onEnter();

          machine.value = destinationState;

        return machine.value
      },
    }
    return machine
  }
  
  // here's how we'll define the state machine
  const machine = createMachine({
    // state machine definition object here...
    initialState: 'off',
  off: {
    actions: {
        onEnter() {
            console.log('off: onEnter');
        },
        onExit() {
            console.log('off: onExit');
        },
      },
      transitions: {
        switch: {
            target: 'on',
            action() {
                console.log('transition action for "switch" in "off" state')
              },
        },
      },
  },
  on: {
    actions: {
        onEnter() {
            console.log('on: onEnter');
        },
        onExit() {
            console.log('on: onExit');
        },
      },
      transitions: {
        switch: {
            target: 'off',
            action() {
                console.log('transition action for "switch" in "on" state')
              },
        },
      },
  },
  })
  
  // here's how we use the state machine
  // comments are what we _want_ to have logged
  /*
  machine.value // current state
machine.transition(currentState, eventName)
  */
  let state = machine.value;
  console.log(`current state: ${state}`); // current state: off
  
  state = machine.transition(state, 'switch');
  console.log(`current state: ${state}`); // current state: on
  
  state = machine.transition(state, 'switch');
  console.log(`current state: ${state}`); // current state: off