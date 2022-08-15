"use strict";
exports.__esModule = true;
var jsdom_1 = require("jsdom");
//mock DOM/headless browser
var dom = new jsdom_1.JSDOM("<!DOCTYPE html><div id=\"app\"></div>");
var _a = dom.window, document = _a.document, HTMLElement = _a.HTMLElement, HTMLDivElement = _a.HTMLDivElement, customElements = _a.customElements, CustomEvent = _a.CustomEvent, Event = _a.Event;
var MyEvent = /** @class */ (function () {
    function MyEvent(topic, detail) {
        this.topic = topic;
        this.detail = detail;
    }
    return MyEvent;
}());
/* mediator using PubSub Pattern to facilitate communication between two objects*/
var MyMediator = /** @class */ (function () {
    function MyMediator() {
    }
    MyMediator.prototype.publish = function (e) {
        console.log(new Date().getTime(), 'PUBLISH', e.topic, e.detail.data);
        document.dispatchEvent(new CustomEvent('awesome', { bubbles: true,
            detail: { handler: e.detail.handler }
        }));
    };
    MyMediator.prototype.subscribe = function (e) {
        var myEventList = new CustomEvent(e.topic, { detail: e.detail });
        console.log(new Date().getTime(), 'SUBSCRIBE', e.topic, e.detail.data != null ? e.detail.data : '');
        //document.addEventListener(e.topic, e.detail.handler);
    };
    MyMediator.prototype.unsubscribe = function (e) {
        console.log(new Date().getTime(), 'UNSUBSCRIBE', e.topic, e.detail.data != null ? e.detail.data : '');
        //document.removeEventListener(myEventList);
    };
    return MyMediator;
}());
var Main = /** @class */ (function () {
    function Main(appSettings) {
        this._mediator = new MyMediator();
        this._onErrorHandler = appSettings.onErrorHandler;
        this.init();
    }
    Main.prototype.init = function () {
        var _this = this;
        this._mediator.subscribe(new MyEvent('app.error', { data: 'argh', handler: function (e, data) { return _this._onErrorHandler(e.detail.data); } }));
        this._mediator.publish(new MyEvent('app.initialize', { data: '', handler: function (e, data) { } }));
    };
    return Main;
}());
var appSettings = {
    onErrorHandler: function (e) {
        alert('Sorry! there has been an error please check out the console for more info!');
        console.log(e.toString());
    }
};
new Main(appSettings);
