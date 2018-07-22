import { Component } from "@angular/core";
var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        var _this = this;
        this.btnOn = false;
        this.turnOnBtn = (function () {
            _this.btnOn = true;
        });
        this.turnOnBtn();
    }
    PricingComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PricingComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './pricing.component.html',
                    styleUrls: ['./pricing.component.css']
                },] },
    ];
    /** @nocollapse */
    PricingComponent.ctorParameters = function () { return []; };
    return PricingComponent;
}());
export { PricingComponent };
