import { JSDOM } from 'jsdom';
import { createElement } from 'parse5/lib/tree-adapters/default';
declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const { window } = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
global.document = window.document;




 class A extends HTMLElement{
     element:HTMLDivElement;


    constructor(){
        super();
        this.element = document.createElement('div');

        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.appendChild(this.element);
    }

    async connectedCallback() {
		this.appendChild(this.element);
	} 
	

}
customElements.define('custom-div', A);
/**
 * @class Main
 */
class Main {
    
    constructor(){
      let container = global.document.getElementById('app');
      let myDiv = global.document.createElement('custom-div');
      container!.appendChild(myDiv);
      console.log(global.document);
    }
}
new Main();