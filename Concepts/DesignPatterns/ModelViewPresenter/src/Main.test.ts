import { JSDOM } from 'jsdom';
import { Main } from './Main';

describe('UNIT TEST - MAIN', () => {
	let component: Main;
	document.body.innerHTML = `<div id="app"></div>`;

	beforeEach(() => {});

	afterEach(() => {
		document.body.innerHTML = '';
		jest.clearAllMocks();
	});

	it('UNIT TESTS - init application expect APP Div to not be null and innerHTML text to be hi', () => {
		component = new Main();
		let appElement = document.getElementById('app');
        expect(appElement).not.toBe(null);
		expect(appElement?.innerHTML).toBe('hi');
	});
});
