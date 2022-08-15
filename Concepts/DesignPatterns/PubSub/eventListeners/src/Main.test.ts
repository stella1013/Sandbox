import { Main } from './Main';

describe('UNIT TEST - Mediator', () => {
	let component: Main;

	beforeEach(() => {});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Pops wants to know when grandma has finished baking apple pie', () => {
		component = new Main();
	});
});
