Using the State Pattern to Create a State Machine
https://medium.datadriveninvestor.com/state-machine-design-pattern-why-how-example-through-spring-state-machine-part-1-f13872d68c2d

# Pros and Cons
No explicit transition defined. Transitions are handled by the state themselves. States can validate whether to go to the next state but this is messy making the transitions tightly coupled to the state.

Also all state objects implement common behaviours through the interface which really seems unecessary and extra work in real life development.

