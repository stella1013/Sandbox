import { EventPortal } from '../EventEmitter';
import { Character } from './Character.interface';

export class Cat implements Character {
	_eventList: Set<CustomEvent> = new Set();
	private _medi: EventPortal;
	private _catIsWatchingPopsIsEatingPie = new CustomEvent('cat.watching');
    
	constructor(medi: EventPortal) {
		this._medi = medi;
		console.log('Cat Says: Im just here to watch!');

		const letCatKnowPopisEatingPieEvent = new CustomEvent('pop.eatingPie', {
			detail: {
				handler: () => {
					console.log('Cat is Watching: Pop eat some pie!');
					this._medi.publish(this._catIsWatchingPopsIsEatingPie);
				},
			},
		});

		this._eventList.add(letCatKnowPopisEatingPieEvent);
	}
	init() {
		this._medi.subscribe(this._eventList);
	}
}
