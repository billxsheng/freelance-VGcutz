import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([{ path: '', component: ContactComponent }])
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return ContactRoutingModule;
}());
export { ContactRoutingModule };
