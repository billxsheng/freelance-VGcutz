import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryItemDetailComponent } from "./gallery-item-detail/gallery-item-detail.component";


@NgModule({
    imports: [
        RouterModule.forChild([{path: '', component: GalleryComponent , children: [
            {path: ':id', component: GalleryItemDetailComponent}
        ]}])
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule {

}