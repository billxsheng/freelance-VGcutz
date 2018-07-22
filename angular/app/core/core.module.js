import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { GalleryService } from "../gallery/gallery.service";
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return CoreModule;
}());
export { CoreModule };
