import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";
import { GalleryListComponent } from "./gallery-list/gallery-list.component";
import { GalleryListItemComponent } from "./gallery-list/gallery-list-item/gallery-list-item";
import { GalleryItemDetailComponent } from "./gallery-item-detail/gallery-item-detail.component";
import { GalleryStartComponent } from "./gallery-start/gallery-start.component";
import { HttpClientModule } from "../../../node_modules/@angular/common/http";

@NgModule({
    declarations: [
        GalleryComponent,
        GalleryListComponent,
        GalleryListItemComponent,
        GalleryItemDetailComponent,
        GalleryStartComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        HttpClientModule
    ],
    exports: [

    ]
})

export class GalleryModule {

}