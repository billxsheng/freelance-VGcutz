import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PricingComponent } from "./pricing.component";
var PricingRoutingModule = /** @class */ (function () {
    function PricingRoutingModule() {
    }
    PricingRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([{ path: '', component: PricingComponent }])
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return PricingRoutingModule;
}());
export { PricingRoutingModule };
