//The PubSub pattern loops through all of the subscriptions and fires their callbacks with that payload.
export default class PubSub {
    constructor() {
      this.events = {};// will hold our named events
    }

    subscribe(event, callback){
        //pass a string event and a callback function
        let self = this;
        if(!self.events.hasOwnProperty(event)){
            // not matching event in our event collection then create event with blank array so we don't have to type check it later.
            self.events[event] = [];
        }
        //then push callback into collection or if it does exist this is all we do
        //return length of the events collection, because it might be handy to know the number events that exist.
        return self.events[event].push(callback);
    }

    publish(event, data={} ){
        let self = this;

        if(!self.events.hasOwnProperty(event)){
            // not matching event in our event collection then return empty array
            return [];
        }
        //if so loop through each stored callback and pass data to it. if no callbacks which shouldn't be the case then we are good becase we created that event with an empty array in the subscribe method
        return self.events[event].map(callback => callback(data));
    }

  }