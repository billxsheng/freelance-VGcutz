import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryItemDetailComponent } from "./gallery-item-detail/gallery-item-detail.component";
import { GalleryStartComponent } from "./gallery-start/gallery-start.component";

const galleryRoutes: Routes = [
   {path: '', component: GalleryComponent , children: [
        {path:'', component: GalleryStartComponent},
        {path: ':id', component: GalleryItemDetailComponent}
    ]}
]


@NgModule({
    imports: [
        RouterModule.forChild(galleryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule {

}