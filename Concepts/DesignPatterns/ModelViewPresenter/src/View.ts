import { JSDOM } from 'jsdom';
import { Presentable } from './Presenter.interface';
import { Viewable } from "./View.interface";

export class View implements Viewable {
    presenter: Presentable | null;
    dom:JSDOM;
    constructor(dom:JSDOM){
        this.presenter = null;
        this.dom = dom;
    }
    getPresenter(): Presentable | null{
        return this.presenter;
    };
    setPresenter(newPresenter:Presentable):void {
        this.presenter = newPresenter;
    }
   render(){
    let app = document.getElementById('app');
    if(app){
        let myString = '';
        if(this.presenter){
            myString = this.presenter.getModel().getData();
        }
        app.innerHTML = myString;
    }
   }

}