import { Modelable } from './Model.interface';
import { Viewable } from './View.interface';


export interface Presentable{
    model:Modelable;
    view:Viewable;
    getModel:()=>Modelable;
    onInit:()=>void;

}