import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";


@NgModule({
    imports: [
        RouterModule.forChild([{path: '', component: GalleryComponent , children: [
            
        ]}])
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule {

}