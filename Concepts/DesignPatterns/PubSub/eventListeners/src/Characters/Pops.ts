import { EventPortal } from "../EventEmitter";
import { Character } from "./Character.interface";

export class Pops implements Character {
	 _eventList: Set<CustomEvent> = new Set();
    private _medi: EventPortal;
    private _popsIsEatingPie = new CustomEvent('pop.eatingPie');
    private _popsIsAshamed = new CustomEvent('pop.ashamed');
	constructor(medi: EventPortal) {
        this._medi = medi;
		console.log('Pops Says: Cant wait to eat some Apple Pie!');
		
		const letPopKnowWhenGrandmaIsdoneBakingEvent = new CustomEvent(
			'grandma.done',
			{
				detail: {
					handler: () => {
						console.log('Pops Says: Oooh! Im going to eat some pie!');
						 this._medi.publish(this._popsIsEatingPie);
					},
				},
			}
		);
		const letPopKnowWhenGrandmaIsAngryEvent = new CustomEvent('grandma.angry', {
			detail: {
				handler: () => {
					console.log('Pops Says: Ooops! Busted!');
                    this._medi.publish(this._popsIsAshamed);
				},
			},
		});
		const letPopKnowGrandmaIsSorryEvent = new CustomEvent('grandma.sorry', {
			detail: {
				handler: () => console.log('Pops Says: Alright! *hugs Grandma*'),
			},
		});

		this._eventList.add(letPopKnowWhenGrandmaIsdoneBakingEvent);
		this._eventList.add(letPopKnowWhenGrandmaIsAngryEvent);
		this._eventList.add(letPopKnowGrandmaIsSorryEvent);
		
	}
    init(){
        this._medi.subscribe(this._eventList);
    }
}