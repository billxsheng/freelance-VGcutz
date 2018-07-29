import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";
import { GalleryListComponent } from "./gallery-list/gallery-list.component";
import { MatProgressSpinnerModule } from "../../../node_modules/@angular/material";
import { GalleryItemDetailComponent } from "./gallery-list/gallery-item-detail/gallery-item-detail.component";

@NgModule({
    declarations: [
        GalleryComponent,
        GalleryListComponent,
        GalleryItemDetailComponent
        
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        MatProgressSpinnerModule
    ],
    exports: [

    ]
})

export class GalleryModule {

}