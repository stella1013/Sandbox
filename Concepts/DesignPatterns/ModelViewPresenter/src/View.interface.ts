import { Presentable } from "./Presenter.interface";

export interface Viewable {
    getPresenter:()=>Presentable | null;
    render:()=>void;
}