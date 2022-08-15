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

class VisitAllPages<DataType> {
	constructor(private baseUrl:string){

	}

	async visit(visitor: (results: DataType[])=>void){
		let nextUrl:string | undefined = this.baseUrl;
		do{
		const response = await fetch(nextUrl);			
			const json: {
				next?:string,
				results:DataType[]
			} = await response.json();
			visitor(json.results);
			nextUrl = json.next;
		} while(nextUrl);

	}
}

interface Pokemon{
	name:string;
	url:string;
}

const visitor = new VisitAllPages<Pokemon[]>(
	"http://pokemonapi"
)

visitor.visit((results)=>{
	console.log(results)
});