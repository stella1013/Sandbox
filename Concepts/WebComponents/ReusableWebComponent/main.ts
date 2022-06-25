import { JSDOM } from 'jsdom';
const MYDOM = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>
`);
/**
 * @abstract
 * @class B
 * @template T
 */
abstract class B <T extends HTMLElement> {
    element: T;

    constructor(elementType:string, dom:JSDOM){
        this.element = <T>document.createElement(elementType);
        console.log(B);
        
        dom.attachShadow({ mode: 'open' });
        dom.shadowRoot.appendChild(this.element);
    }

}
/**
 * @class A
 * @extends {B<HTMLDivElement>}
 */
class A extends B<HTMLDivElement>{
    constructor(DOM:JSDOM, componentType:string){
        super(componentType, DOM); 
    }

}
/**
 * @class Main
 */
class Main {
    component:A;
   
    constructor(){
        this.component = new A(MYDOM, 'div');
        this.component.setAttribute('title', 'hello');
    }
}
new Main();


