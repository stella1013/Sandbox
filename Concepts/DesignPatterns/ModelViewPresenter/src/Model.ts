import { Modelable } from "./Model.interface";

export class Model implements Modelable {
    data = '';
    constructor(){
        
    }
    getData():string{
        return 'hi';
    };
    setData(data: string):void{
        this.data = data;
    };

}