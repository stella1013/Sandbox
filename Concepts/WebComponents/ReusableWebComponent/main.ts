import { JSDOM } from 'jsdom';

//mock DOM/headless browser
const dom = new JSDOM(`<!DOCTYPE html><div id="app"></div>`);
const { document, HTMLElement, HTMLDivElement, customElements } = dom.window;
/**
 * @abstract
 * @class B
 * @template T
 */
abstract class B <T extends HTMLElement> extends HTMLElement {
    element: T;

    constructor(componentType:string) {
        super();
        this.element = <T>document.createElement(componentType);

        this.attachShadow({ mode: 'open' });
		this.shadowRoot!.appendChild(this.element);
       
        
		
	}

    async connectedCallback() {
		this.appendChild(this.element);
	}

   /*  disconnectedCallback() {}
 
    attributeChangedCallback(attrName:string, oldVal:string, newVal:string){} */
	

}
/**
 * @class A
 * @extends {B<HTMLDivElement>}
 */
class A extends B<HTMLDivElement>{
    //element:HTMLDivElement;
    
    constructor(){
        const componentType:string = 'div';
        super(componentType); 
       // this.element = document.createElement(componentType) as HTMLDivElement;      
    }
   
}
customElements.define('custom-div', A);
class C extends B<HTMLButtonElement>{
    //element:HTMLDivElement;
    
    constructor(){
        const componentType:string = 'div';
        super(componentType); 
       // this.element = document.createElement(componentType) as HTMLDivElement;      
    }
   
}
customElements.define('custom-button', C);

class Main {
	public container: HTMLDivElement;
	public myDiv: A;
    public myButton: C;

 constructor() {
		this.container = document.getElementById('app') as HTMLDivElement;
		this.myDiv = new A();
        this.myButton = new C();
		this.container!.appendChild(this.myDiv);
		this.container!.appendChild(this.myButton);


    this.output();
	}

output(): void {
		console.log(document.body.innerHTML);
	}
}
new Main();
