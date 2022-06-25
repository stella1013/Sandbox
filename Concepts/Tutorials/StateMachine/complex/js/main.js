/*
/src
├── js
│   ├── components
│   │   ├── count.js
│   │   ├── list.js
│   │   └── status.js
│   ├──lib
│   │  ├──component.js
│   │  └──pubsub.js
└───── store
       └──store.js
       └──main.js
       */
       import store from './store/index.js'; 

       import Count from './components/count.js';
       import List from './components/list.js';
       import Status from './components/status.js';
       
       const formElement = document.querySelector('.js-form');
       const inputElement = document.querySelector('#new-item-field');
       //So far, all we’re doing is pulling in dependencies that we need.Store, Front-End Components and DOM
       // add Event Listener to Form
       formElement.addEventListener('submit', evt => {
              //prevent form from submitting
              evt.preventDefault();
            //get the value of the textbox and trim any whitespace off because we want to make sure there is any content to pass to the store.
              let value = inputElement.value.trim();
            // if there is content, dispatch 'addItem' action with that content and let our store deal with it for us.
              if(value.length) {
                store.dispatch('addItem', value);
                inputElement.value = '';
                inputElement.focus();
              }
            });
            // create new instance of our components and calling each other render methods so that we get our initial state on page.
            const countInstance = new Count();
            const listInstance = new List();
            const statusInstance = new Status();
            
            countInstance.render();
            listInstance.render();
            statusInstance.render();

            /* NEXT STEPS - 
            You could implement some local storage to maintain state, even when you reload
You could pull out the front-end of this and have a little state system for your projects
You could continue to develop the front-end of this app and make it look awesome. (I’d be really interested to see your work, so please share!)
You could work with some remote data and maybe even an API
You could take what you’ve learned about Proxy and the Pub/Sub pattern and develop those transferable skills further 
FUTURE ADDITIONS - You could actually modular-ize this application now if you wanted because we’ve added most of the bits that we need. You could also add some tests to check that everything run as expected. 
*/