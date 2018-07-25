import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryListComponent } from "./gallery-list/gallery-list.component";
import { GalleryItemDetailComponent } from "./gallery-list/gallery-item-detail/gallery-item-detail.component";

const galleryRoutes: Routes = [
   {path: '', component: GalleryComponent , children: [
        {path:'', component: GalleryListComponent},
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