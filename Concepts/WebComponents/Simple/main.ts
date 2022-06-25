import { JSDOM } from 'jsdom';
const MYDOM = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>
`);


 class A extends HTMLElement{
     element:HTMLDivElement;


    constructor(){
        super();
        MYDOM.
        MYDOM.attachShadow({ mode: 'open' });
        MYDOM.shadowRoot.appendChild(this.element);
    }
    async connectedCallback() {
		MYDOM.appendChild(this.element);
	} 
	

}
customElements.define('custom-div', A);
/**
 * @class Main
 */
class Main {
    
    constructor(){
        MYDOM.createElement('custom-div');
    }
}
new Main();