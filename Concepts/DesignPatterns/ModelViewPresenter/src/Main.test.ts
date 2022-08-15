import { Main } from './Main';

describe('UNIT TEST - Mediator', () => {
	let component: Main;

	beforeEach(() => {});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('UNIT TESTS - MAIN', () => {
		component = new Main();
	});
});
