import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        //AppRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [

    ]
})
export class CoreModule {

}