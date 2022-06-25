"use strict";
exports.__esModule = true;
var jsdom_1 = require("jsdom");
var mycomponent_1 = require("./mycomponent");
var Main = /** @class */ (function () {
    function Main() {
        this.myDom = new jsdom_1.JSDOM("<!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\" />\n            <meta\n                name=\"viewport\"\n                content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"\n            />\n            <title><%= htmlWebpackPlugin.options.title %></title>\n            <script type=\"text/javascript\" src=\"main.js\" defer></script>\n        </head>\n        <body>\n            <div id=\"app\">\n                \n            </div>\n        </body>\n        </html>");
        new mycomponent_1.MyComponent();
    }
    return Main;
}());
new Main();
