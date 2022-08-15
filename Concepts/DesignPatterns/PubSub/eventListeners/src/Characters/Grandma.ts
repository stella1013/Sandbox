import { EventPortal } from '../EventEmitter';
import { Character } from './Character.interface';

export class Grandma implements Character {
	_eventList: Set<CustomEvent> = new Set();
	private _medi: EventPortal;
    
	private grandmaIsDone = new CustomEvent('grandma.done');
	private grandmaIsAngry = new CustomEvent('grandma.angry');
	private grandmaIsSorry = new CustomEvent('grandma.sorry');
	constructor(medi: EventPortal) {
		this._medi = medi;
		console.log('Grandma says: Baking Apple Pie for the Grandchildren');

		const letGrandmaKnowPopEatingPieEvent = new CustomEvent('pop.eatingPie', {
			detail: {
				handler: () => {
					console.log('Grandma Says: Pops! That Pie is not for you!');
					this._medi.publish(this.grandmaIsAngry);
				},
			},
		});
		const letGrandmaKnowWhenSheHurtsPopsFeelingsEvent = new CustomEvent(
			'pop.ashamed',
			{
				detail: {
					handler: () => {
						console.log('Grandma says: Pops you can have some pie later!');
						this._medi.publish(this.grandmaIsSorry);
					},
				},
			}
		);

		this._eventList.add(letGrandmaKnowPopEatingPieEvent);
		this._eventList.add(letGrandmaKnowWhenSheHurtsPopsFeelingsEvent);

		console.log('Grandma Says: baking is done. now to let it cool');
	}
	init() {
		this._medi.subscribe(this._eventList);
		this._medi.publish(this.grandmaIsDone);
	}
}
