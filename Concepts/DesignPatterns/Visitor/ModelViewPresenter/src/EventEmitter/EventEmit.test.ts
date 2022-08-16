import { EventEmit } from './EventEmit';

describe('UNIT TEST - EventEmit', () => {
	let component: EventEmit;
	

	beforeEach(() => {
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Pops is listening for Grandma to finish', () => {
		component = new EventEmit();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		component.getNumberOfSubscriptions();
		expect(spy2).toReturnWith(3);
	});
	it('Pops wants to know when grandma has finished baking apple pie', () => {
		component = new EventEmit();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		component.getNumberOfSubscriptions();
		expect(spy2).toReturnWith(3);
	});

	
});
