export default {
    //mutations.. all the do is mutate the store's state. any proper logic should happen in your actions.
    addItem(state, payload) {
      state.items.push(payload);
  //returning new version of the state so that the Store's <> commit method can do its magic and update everything
      return state;
    },
    clearItem(state, payload) {
      state.items.splice(payload.index, 1);
  
      return state;
    }
  };