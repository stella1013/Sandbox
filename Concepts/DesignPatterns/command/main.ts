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

abstract class  Command<State> {
	abstract execute(state:State):State;
	abstract undo(state:State):State;
		
	
}

class CommandStack<State>{

private stack: Command<State>[]=[];
constructor(private _state:State){

}

get state(){
	return this._state;
}
execute(command:Command<State>){
	this._state = command.execute(this._state);
	this.stack.push(command);
}

undo(){
	const command = this.stack.pop();
	if(command){
		this._state = command.undo(this._state)
	}
}
}

class AddOne extends Command<number>{

execute(state: number): number {
	return state + 1;
}
undo(state: number): number {
	return state -1;
}

}

const cs = new CommandStack<number>(0);
console.log(cs.state);
cs.execute(new AddOne());
console.log(cs.state);
cs.undo();
console.log(cs.state)


class SetValue extends Command<number>{
	private _origVal?: number | undefined;
	constructor(private value:number){
		super();
		
	}
	execute(state: number): number {
		this._origVal = state;
		return state + 1;
	}
	undo(state: number): number {
		return this._origVal!;
	}
	
	}
	const cs2 = new CommandStack<number>(0);
	console.log(cs2.state);
	cs2.execute(new SetValue(3));
	console.log(cs2.state);
	cs2.undo();
	console.log(cs2.state);