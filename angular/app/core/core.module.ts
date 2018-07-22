import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { GalleryService } from "../gallery/gallery.service";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule,
        FooterComponent
    ],
    providers: [
        GalleryService
    ]
})
export class CoreModule {

}