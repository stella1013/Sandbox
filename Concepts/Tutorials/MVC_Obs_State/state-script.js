/* The State Pattern
What is the State Pattern? It is different than the concept of a State Machine, but can be used to build one. Instead of having enumerated values representing different states, our states are abstracted into objects. */
/**
 * Exposes the state to objects that need to reference and allows state to be manipulated
 * getValue ()=>currentState - returns Stored reference to current state
 * changeState ()=>void - Method for changing the state
 *
 */
function HeadingState(){
    var self = this;
    //injecting parent container into our concrete state objects as part of their constructors allowing us to pass the container, and change it's state reference as we cycle through the available states.
    this.state = new HelloState(self);
    //changestate() can be called from the context of whereever HeadingState is instantiated.
    this.changeState = function(){
        // all states implement next() to move from one state to the next
        self.state.next();
    }
    this.getValue = function(){
      return self.state.value;
    }
}
//State Objects - switching states instantiate a new state with the same container passed around.
// as tje constructor runs, the containers state is set to the current state object. Each State has an appropriate value 'Hello' or 'World'

function HelloState(container){
    var self = this;
    this.container = container;
    this.value = 'Hello';
    container.state = this;
    this.next = function(){
      return new WorldState(self.container);
    }
  }
  function WorldState(container){
    var self = this;
    this.container = container;
    this.value = 'World';
    container.state = this;
    this.next = function(){
      return new HelloState(self.container);
    }
  }

  //Model updates with changeHeading()
  function Model(){
    var self = this;
    var state = new HeadingState();
    var heading = state.getValue();
    this.observers = [];
    this.registerObserver = function(observer){
      self.observers.push(observer);
    }
    this.notifyAll = function(){
      self.observers.forEach(function(observer){
        observer.update(self);
      })
    }
    //add changeHeading method to toggle state;
    this.changeHeading = function(){
      console.log('change heading');
      state.changeState();
      self.heading = state.getValue();
    }
    Object.defineProperty(this,"heading",{
      get: function() { return heading; },
      set: function(value) { 
        heading = value;  
        this.notifyAll();
      }
    });
  }

  function Controller(model){
    var self = this;
    this.model = model;
  //EVENTLISTENER INTERFACE
    this.handleEvent = function(e){
      e.stopPropagation();
      switch(e.type){
        case "click":
          self.clickHandler(e.target);
          break;
        default:
          console.log(e.target);
      }
    }
  //GET MODEL HEADING
    this.getModelHeading = function(){
      return self.model.heading;
    }
  //CHANGE THE MODEL
    this.clickHandler = function(target){
      self.model.heading = "World";
     //now we just notify our observers
      self.model.notifyAll();
    }

    //FIRST UPDATE/INIT
    this.init = function() {
        self.model.notifyAll();
       }
}
function View(controller){
    this.controller = controller; 
    this.heading = document.getElementById('heading');
    this.heading.addEventListener('click', controller);
    this.update = function(data){
         this.heading.innerText = data.heading;
    }
    this.controller.model.registerObserver(this);
}
//Injecting our defined classes in the correct order
function main(){
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
  controller.init();
}

main();