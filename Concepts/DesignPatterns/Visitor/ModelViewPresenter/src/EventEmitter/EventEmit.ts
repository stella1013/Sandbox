import { EventEmitterable } from "./interfaces/EventEmitterable.interface";

	export class EventEmit implements EventEmitterable {
		constructor() {}
		unsubscribe(myEvent: CustomEvent<any>): void {
			window.removeEventListener(myEvent.type, myEvent.detail.handler);
		}

		subscribe(myEvent: CustomEvent<any>): any {
			window.addEventListener(myEvent.type, myEvent.detail.handler);
		}

		publish(e: CustomEvent): void {
			global.dispatchEvent(e);
		}
	}

