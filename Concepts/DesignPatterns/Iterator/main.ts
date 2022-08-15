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

//using generator function
async function* iterateResults<DataType> (url:string){
	let nextUrl:string | undefined = url;
	do{
	const response = await fetch(nextUrl);			
		const json: {
			next?:string,
			results:DataType[]
		} = await response.json();
		yield* json.results;
		nextUrl = json.next;
	} while(nextUrl);

}

(async function(){
	for await(const result of iterateResults('http:url')){
		console.log(result);
	}
})