import { EventTracker } from '../../../gui/web/EventTracker';

describe('UNIT TEST - EventTracker', () => {
	let component: EventTracker;

	let holidayCampaignTemplate = {
		interestedInCampaign: 'holidayCampaign',
		message: '',
		handler: () => null,
	};
	let savingsCampaignTemplate = {
		interestedInCampaign: 'savingsCampaign',
		message: 'hello',
		handler: (interestedInCampaign: string, message: string) =>
			console.log('Cash In: ' + interestedInCampaign + ': ' + message),
	};
	

	beforeEach(() => {
		

       
	});

	afterEach(() => {
		
		jest.clearAllMocks();
	});

	it('Component Subscribes to a Holiday Campaign Event when initialized', () => {
		component = new EventTracker();
		let spy = jest.spyOn(component, 'subscribe');
		let spy2 = jest.spyOn(component, 'getNumberOfSubscriptions');
       
        function grandma(){
			let grandmaCamp = { ...holidayCampaignTemplate };
			grandmaCamp.message = 'grandma is looking to cash in';
			grandmaCamp.handler = grandma.prototype.handler;
			grandma: {
				component.subscribe(grandmaCamp);
			}
			handler: (function () {
				console.log(
				'grandma is loaded and wants to keep getting deal notifications'
			);})
		}
        grandma();
        component.publish('holidayCampaign');
		expect(spy).toHaveBeenCalled();
		component.getNumberOfSubscriptions();
		expect(spy2).toReturnWith(1);
	});
	it('Event is Published', () => {
		component = new EventTracker();
		let spy = jest.spyOn(component, 'publish');
		let spy2 = jest.spyOn(component, 'getNumberOfSubscriptions');
		// component.subscribe(holidayCampaign);
		function grandma() {
			let grandmaCamp = { ...holidayCampaignTemplate };
			grandmaCamp.message = 'grandma is looking to cash in';
			grandmaCamp.handler = grandma.prototype.handler;
			grandma: {
				component.subscribe(grandmaCamp);
			}
			handler: (function () {
				console.log(
				'grandma is loaded and wants to keep getting deal notifications'
			);})
		}

		function pops() {
			let popsCamp = { ...holidayCampaignTemplate };
			popsCamp.message = 'pops is looking to cash in';
			popsCamp.handler = pops.prototype.handler;
			pops: {
				component.subscribe(popsCamp);
			}
			
			handler: (function () {
				console.log(
					'pops is running his own handler, but only want to get notified once'
				);
				
			});
		}

		function dad() {
			let dadCamp = { ...savingsCampaignTemplate };
			dadCamp.message = 'dad is looking to cash in';
			dad: {
				component.subscribe(dadCamp);
			}
		}
		grandma();
		pops();
		dad();
		component.publish('holidayCampaign');
		component.publish('salesCampaign');
		component.publish('holidayCamipaign');
		expect(spy).toHaveBeenCalled();
		component.getNumberOfSubscriptions();
		expect(spy2).toReturnWith(3);
	});

	it('Component is unsubscribed from an event', () => {
		component = new EventTracker();
		let spy = jest.spyOn(component, 'publish');
		let spy2 = jest.spyOn(component, 'getNumberOfSubscriptions');
		// component.subscribe(holidayCampaign);
		function grandma() {
			let grandmaCamp = { ...holidayCampaignTemplate };
			grandmaCamp.message = 'grandma is looking to cash in';
			grandmaCamp.handler = grandma.prototype.handler;
			grandma: {
				component.subscribe(grandmaCamp);
			}
			handler: (function () {
				console.log(
				'grandma is loaded and wants to keep getting deal notifications'
			);})
		}

		function pops() {
			let popsCamp = { ...holidayCampaignTemplate };
			popsCamp.message = 'pops is looking to cash in';
			popsCamp.handler = pops.prototype.anotherHandler;
			pops: {
				component.subscribe(popsCamp);
			}
			unsubScribeMe: component.unsubscribe(popsCamp);
			anotherHandler: (function () {
				console.log(
					'pops is running his own handler, but only want to get notified once'
				);
				pops.prototype.unsubScribeMe();
			});
		}

		function dad() {
			let dadCamp = { ...savingsCampaignTemplate };
			dadCamp.message = 'dad is looking to cash in';
			dad: {
				component.subscribe(dadCamp);
			}
		}
		grandma();
		pops();
		dad();
		component.publish('holidayCampaign');
		component.publish('salesCampaign');
		component.publish('holidayCamipaign');
        component.publish('salesCampaign');
		expect(spy).toHaveBeenCalled();
		component.getNumberOfSubscriptions();
		expect(spy2).toReturnWith(2);
	});
});
