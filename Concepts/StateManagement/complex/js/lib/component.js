//Used as a parent class that other components classes will extend.
import Store from './store.js';
// importing store not because we want an instance of it but for checking one of our properties in the constructor
export default class Component {
    constructor(props = {}) {
      let self = this;
  //look to see if we have the render method. if this Componet class is the parent of another class, then that will have likely set its own method for render. if there is no render set, we create an empty method that will prevent things from breaking
      this.render = this.render || function() {};
  // check against Store class like mentioned above to make sure the that the store prop is a Store class instance so we can confidently use its methods and properties.
      if(props.store instanceof Store) {

        // subscribing to the global stateChange even so our object can 'react'. this is calling the render function each time the state changes.
        props.store.events.subscribe('stateChange', () => self.render());
      }
  
      if(props.hasOwnProperty('element')) {
        this.element = props.element;
      }
    }
}
    
    //https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/