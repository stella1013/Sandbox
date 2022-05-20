/*We’ve got our store system and the components to render and interact with its data. Let’s now wrap up by hooking up the two separate ends of the app and make the whole thing work together. We’ll need to add an initial state, some actions and some mutations. In your store directory, add a new file called state.js. For me it’s like this*/


//adding a default set of items on the first load.
export default {
    items: [
      'I made this',
      'Another thing'
    ]
  };