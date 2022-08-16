import { Modelable } from './Model.interface';
import { EventPortal } from './EventEmitter/EventPortal';
import { Presentable } from "./Presenter.interface";
import { Viewable } from './View.interface';

export class Presenter implements Presentable {
    model:Modelable;
    view:Viewable;
    _mediator:EventPortal;
    _eventList: Set<CustomEvent> = new Set();
    private presenterRenderView = new CustomEvent('view.render');
    constructor(mediator:EventPortal, model:Modelable, view:Viewable) {
        this.model = model;
        this.view = view;
        this._mediator = mediator;
        
        const listeningForAppInitEvent = new CustomEvent('app.init', {
			detail: {
				handler: () => {
					this.onInit();
					this._mediator.publish(this.presenterRenderView);
				},
			},
		});
        this._eventList.add(listeningForAppInitEvent);
        this._mediator.subscribe(this._eventList);
    }
    getModel():Modelable{
        return this.model;
    }
    onInit():void {
        
        this.view.render();
    }

}