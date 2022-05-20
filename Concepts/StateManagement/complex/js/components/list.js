import Component from '../lib/component.js';
import store from '../store/index.js';

export default class List extends Component {

  constructor() {
      //passing our Store Instance up to the Component parent class that we are extending.
    super({
      store,
      element: document.querySelector('.js-items')
    });
  }
//declare render method that gets called each time the stateChange Pub/Sub event happens. In this render method we put out either a list of items or a little notice if there are no items. 
//Each button has an event attached to it and they dispatch an action within our store.
  render() {
    let self = this;

    if(store.state.items.length === 0) {
      self.element.innerHTML = `<p class="no-items">You've done nothing yet &#x1f622;</p>`;
      return;
    }

    self.element.innerHTML = `
      <ul class="app__items">
        ${store.state.items.map(item => {
          return `
            <li>${item}<button aria-label="Delete this item">×</button></li>
          `
        }).join('')}
      </ul>
    `;

    self.element.querySelectorAll('button').forEach((button, index) => {
      button.addEventListener('click', () => {
        store.dispatch('clearItem', { index });
      });
    });
  }
};