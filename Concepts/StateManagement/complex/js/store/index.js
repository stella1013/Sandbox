//this will glue all the elements of the store together in one Store instance.

import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import Store from './store.js';

export default new Store({
  actions,
  mutations,
  state
});