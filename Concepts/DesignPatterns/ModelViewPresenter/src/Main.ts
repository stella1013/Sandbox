import { JSDOM } from 'jsdom';
import { EventEmit, EventPortal } from './EventEmitter';
import { Model } from './Model';
import { Presenter } from './Presenter';
import { View } from './View';


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
	model:Model;
	view:View;
	presenter:Presenter;
	private _pubsub: EventEmit;
	private _mediator: EventPortal;
	private appLoaded = new CustomEvent('app.init');


   constructor() {
		this._pubsub = new EventEmit();
        this._mediator = new EventPortal(this._pubsub);
        this.model = new Model();
		this.view = new View(dom);
		this.presenter = new Presenter(this._mediator, this.model, this.view);
		this.view.setPresenter(this.presenter);
		this.init();

    }
	init():void{
		this._mediator.publish(this.appLoaded);
	}
	
}