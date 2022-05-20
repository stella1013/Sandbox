const App = function _App() {  
    return `
          <h1>Hello Vanilla JS!</h1>
          <div>
            Example of state management in Vanilla JS
          </div>
          <br />
          <h1>${_App.state.count}</h1>
          <button id="button">Increase</button>
        `;
  }
  App.state = {
    count:0,
    increment: () => {
        setState(()=>App.state.count++);
    }
}
//rerendering ui to reflect latest state
const updateTree = () => {
    document.getElementById("app").innerHTML = App();
    // On Click Function
    document.getElementById("button").addEventListener("click", App.state.increment);
}

// setState
const setState = (callback) =>{
    callback();
    updateTree();
}
updateTree();

/*
Things to do,

Should not render the whole application to reflect a simple change.
As soon as we update to reflect the state, all the event listeners attached to DOM should not be lost and we shouldn't add new event listeners in its place.
The DOM elements that were unaffected and unchanged by state should not be forced to change. Changes should be as small as possible
So we shall few optimisations to our App like how React and similar library / framework does in the next upcoming article.
*/