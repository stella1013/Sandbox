# State Machine via State Design Pattern
By: Emanuel Moecklin
https://medium.com/nerd-for-tech/the-super-state-design-pattern-166127ce7c9a

State Design Pattern 
An object should change its behavior when its state changes.
State-specific behavior/code should be defined independently.

This is achieved by moving the state specific code into State classes/objects. The main class (called Context) keeps track of its state and delegates the behavior to the State objects.

The Context holds a reference to its current State and delegates the execution of request() to state.handle().
Each State object implements the handle() function. This is the state-specific behavior that gives us encapsulation and reuse.


Using a State Design Pattern over Switch and If statements and over State Machines is a powerful tool that can make your life easier and save your employer time & money. It’s that simple.