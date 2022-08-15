import { EventEmit } from "./EventEmit";
import { Publishable } from "./interfaces/Publishable.interface";
import { Subscribable } from "./interfaces/Subscribable.interface";
import { Unsubscribable } from "./interfaces/Unsubscribable.interface";

	export class EventPortal implements Subscribable, Publishable, Unsubscribable {
		protected _eventTracker: EventEmit;
		private _subscriptionList: Set<CustomEvent> = new Set();

		constructor(eventEmitter: EventEmit) {
			this._eventTracker = eventEmitter;
		}
		unsubscribe(): void {
			this._subscriptionList.forEach((sub) =>
				this._eventTracker.unsubscribe(sub)
			);
		}

		subscribe(campaign: Set<CustomEvent<any>>): any {
			campaign.forEach((myEvent) => {
				this._subscriptionList.add(myEvent);
				this._eventTracker.subscribe(myEvent);
			});
		}

		publish(e: CustomEvent): void {
			console.log('ACTION: ', e.type);
			this._subscriptionList.forEach(
				(str) => str.type === e.type && this._eventTracker.publish(e)
			);
		}
	}

