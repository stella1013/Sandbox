function Model(){
    var self = this;
    this.heading = "Hello";
    //collection of observers 
      this.observers = []; 
    //add to the collection of observers
    this.registerObserver = function(observer){
      self.observers.push(observer);
    }
    //Iterate over observers, calling their update method
    this.notifyAll = function(){
      self.observers.forEach(function(observer){
        observer.update(self);
      })
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
      self.model.heading = 'World';
     //now we just notify our observers
      self.model.notifyAll();
    }
    //FIRST UPDATE/INIT
    this.init = function() {
      self.model.notifyAll();
     }
}
//Injecting our defined classes in the correct order
function main(){
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
  controller.init();
}

main();
/*
Improvements
There are still some opportunities for improvement/cleaner implementation:

Getter and Setter logic should be contained within the model, so that we can trigger notification in the model when the value is updated, rather than having to do so manually in the controller
We can abstract the heading value using the State pattern and make it so we can toggle between “hello” and “world”, rather than simply initiating the change once
*/