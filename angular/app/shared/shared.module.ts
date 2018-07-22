import { NgModule } from "@angular/core";
import { MapComponent } from "./map/map.component";
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";
import { BackgroundMainDirective } from "./directives/background-main.directive";


@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyA8FzTmvGjGcKsFyaM_zqG9BXgpHFvl18E',
            apiVersion: "3.31"
        }),
        CommonModule
    ],
    declarations: [
        MapComponent,
        BackgroundMainDirective
    ],
    exports: [
    CommonModule,
    MapComponent,
    BackgroundMainDirective
    ]
})
export class SharedModule {

}