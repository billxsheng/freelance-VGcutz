import { NgModule } from "../../../node_modules/@angular/core";
import { MapComponent } from "./map/map.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { AgmCoreModule } from "../../../node_modules/@agm/core";


@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyA8FzTmvGjGcKsFyaM_zqG9BXgpHFvl18E',
            apiVersion: "3.31"
        }),
        CommonModule
    ],
    declarations: [
        MapComponent
    ],
    exports: [
    CommonModule,
    MapComponent
    ]
})
export class SharedModule {

}