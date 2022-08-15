import { JSDOM } from 'jsdom';


//mock DOM/headless browser
const dom = new JSDOM(`<!DOCTYPE html><div id="app"></div>`);
const {
	document,
	HTMLElement,
	HTMLDivElement,
	addEventListener,
	dispatchEvent,
} = dom.window;

export class Main {
   constructor() {
        
    }
  
}