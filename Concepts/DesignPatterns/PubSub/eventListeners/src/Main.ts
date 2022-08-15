import { Grandma } from './Characters/Grandma';
import { EventPortal, EventEmit } from './EventEmitter';
import { JSDOM } from 'jsdom';
import { Cat } from './Characters/Cat';
import { Pops } from './Characters/Pops';

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
    _mediator:EventPortal;
    _grandma: Grandma;
   _cat: Cat;
    _pops: Pops;
    _pubsub: EventEmit;

	constructor() {
        this._pubsub = new EventEmit();
        this._mediator = new EventPortal(this._pubsub);
        this._grandma = new Grandma(this._mediator);
        this._pops = new Pops(this._mediator);
        this._cat = new Cat(this._mediator);
        this.init();
    }
   init(){
    this._cat.init();
    this._pops.init();
    this._grandma.init();
   }
	
}