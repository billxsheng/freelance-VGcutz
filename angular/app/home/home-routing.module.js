import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([{ path: '', component: HomeComponent }])
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return HomeRoutingModule;
}());
export { HomeRoutingModule };
