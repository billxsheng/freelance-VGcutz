import { Component } from "@angular/core";
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    HomeComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css'],
                },] },
    ];
    return HomeComponent;
}());
export { HomeComponent };
