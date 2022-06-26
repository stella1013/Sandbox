import { JSDOM } from 'jsdom';

//mock DOM/headless browser
const dom = new JSDOM(`<!DOCTYPE html><div id="app"></div>`);
const { document, HTMLElement, HTMLDivElement, customElements } = dom.window;

class A extends HTMLElement {
	private _element: HTMLDivElement;

	constructor() {
		super();
		this._element = document.createElement('div');

		this.attachShadow({ mode: 'open' });
		this.shadowRoot!.appendChild(this._element);
	}

	async connectedCallback() {
		this.appendChild(this._element);
	}
}
customElements.define('custom-div', A);
/**
 * @class Main
 */
class Main {
	public container: HTMLDivElement;
	public myDiv: A;
	constructor() {
		this.container = document.getElementById('app') as HTMLDivElement;
		this.myDiv = document.createElement('custom-div') as A;
		this.container!.appendChild(this.myDiv);

    this.output();
	}
/**
 * outputs to console
 *
 * @memberof Main
 */
output(): void {
		console.log(document.body.innerHTML);
	}
}
new Main();