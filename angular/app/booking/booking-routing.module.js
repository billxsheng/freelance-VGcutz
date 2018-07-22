import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
var BookingRoutingModule = /** @class */ (function () {
    function BookingRoutingModule() {
    }
    BookingRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([{ path: '', component: BookingComponent }])
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return BookingRoutingModule;
}());
export { BookingRoutingModule };
