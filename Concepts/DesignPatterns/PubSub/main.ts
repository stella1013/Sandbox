import { JSDOM } from 'jsdom';

//mock DOM/headless browser
const dom = new JSDOM(`<!DOCTYPE html><div id="app"></div>`);
const {
	document,
	HTMLElement,
	HTMLDivElement,
	customElements,
	CustomEvent,
	Event,
} = dom.window;
class Subscribable<MessageType> {
	private subscribers: Set<(msg: MessageType) => void> = new Set();

	constructor() {}
	subscribe(cb: (msg: MessageType) => void): () => void {
		this.subscribers.add(cb);
		return () => {
			this.subscribers.delete(cb);
		};
	}

	publish(msg: MessageType): void {
		this.subscribers.forEach((cb) => cb(msg));
	}
}

const sub = new Subscribable<string>();
const unsub = sub.subscribe(console.log);
sub.subscribe(console.log);
sub.publish("hello");
sub.publish("whatever");
unsub();
sub.publish("goodbye");

class DataClass extends Subscribable<number>{

	constructor(public value:number){
		super();
	}
	setValue(v:number){
		this.value = v;
		this.publish(v);
	}
}

const holidaySales = new DataClass(0);
const person1 = holidaySales.subscribe((v:number)=>console.log(v));
const person2 = holidaySales.subscribe((v:number)=>console.log(v));

holidaySales.setValue(40);
person1();
holidaySales.setValue(44);
person2();
