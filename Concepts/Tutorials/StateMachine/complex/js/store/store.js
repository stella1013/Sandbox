import PubSub from "./pubsub";

/* The Store is our central object. Each time you see @import store from '../lib/store.js, you’ll be pulling in the object that we’re going to write. It’ll contain a state object that, in turn, contains our application state, a commit method that will call our >mutations, and lastly, a dispatch function that will call our actions. Amongst this and core to the Store object, there will be a Proxy-based system that will monitor and broadcast state changes with our PubSub module.
 */
export default class Store {
	constructor(params) {
		let self = this;
        //default objects for state, actions and mutations
		self.actions = {};
		self.mutations = {};
		self.state = {};
		self.status = 'resting';

        // new PubSub instance that will be attached to the Store as an events element
        self.events = new PubSub();

        //next search the passed params object to see if any actions or mutations were passed in.
        //when store object is instantiated, we can pass in an object of data. Included in that can be a collection of actions and mutations that control the flow of data in our store.
        if(params.hasOwnProperty('actions')){
            self.mutations = params.actions;
        }
        if(params.hasOwnProperty('mutations')){
            self.mutations = params.mutations;
        }

        /* Store object needs to keep track of all the changes. The Proxy will work on behalf of our state object. If we add a get trap, we can monitor every time that the object is asked for data.

        Similarly with a set trap we can keep an eye on changes that are made to the object.
        */

        self.state = new Proxy((params.state || {}),{
            //Trapping the state object set Operations
            //when a mutation runs something like state.name = 'Foo', this trap catches it before it can be set and provide us an opportunity to work with the change or even reject it completely. In our context we are setting the change then logging it to the console
            set: function(state, key, value){
                state[key] = value;
                console.log(`stateChange: ${key}: ${value}`);

                //then we're publishing a stateChange event with the PubSub module. anthing subscribed to that event's callback will be called.
                self.events.publish('stateChange', self.state);
                // last  checking the status of the Store. If it's not currently running a mutation, it means the state was updated manually. then add a warning in the console giving the developer a telling off.
                if(self.status !== 'mutation'){
                    console.warn(`You Should use a mutation to set ${key}`);
                }
                self.status = 'resting';

                return true;
            }
        })
	}

/*There’s a lot going on there, but I hope you’re starting to see how this is all coming together and importantly, how we’re able to maintain state centrally, thanks to Proxy and Pub/Sub.*/

dispatch(actionKey, payload){
    //calls actions
    let self = this;
    //look for an action and if it exists, set a status and call the action while creating a logging group that keeps all  of our logs. Anything(like a mutation or Proxy log) will be kept in the group we define.

    //if no action is set it'll log an error and bail
    if(typeof self.actions[actionKey] !== 'function'){
        console.error(`Action "${actionKey} doesn't exist.`);
        return false;
    }
    console.groupCollapsed(`ACTION: ${actionKey}`);

    self.status = 'action';

    self.actions[actionKey](self, payload);
    console.groupEnd();

    return true;
}

commit(mutatationKey, payload){
    // calls mutations
    let self = this;
    if(typeof self.mutations[mutatationKey] !== 'function'){
        console.log(`Mutation "${mutatationKey}" doesn't exist.`);
        return false;
    }
    //if mutation can be found we run it and get our new state from its return value. We take the new state and merge it with our existing state to create an up-to-date version of our state.
    self.status = 'mutation';

    let newState = self.mutations[mutatationKey](self.state, payload);

    self.state = Object.assign(self.state, newState);

    return true;

}
//FUTURE ADDITIONS - You could actually modular-ize this application now if you wanted because we’ve added most of the bits that we need. You could also add some tests to check that everything run as expected. 
}
