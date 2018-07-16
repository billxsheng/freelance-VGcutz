import { NgModule } from "../../../node_modules/@angular/core";
import { MapComponent } from "./map/map.component";
import { CommonModule } from "../../../node_modules/@angular/common";


@NgModule({
    imports: [

    ],
    declarations: [
        MapComponent
    ],
    exports: [
    CommonModule
    ]
})
export class SharedModule {

}