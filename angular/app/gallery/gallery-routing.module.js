import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryItemDetailComponent } from "./gallery-item-detail/gallery-item-detail.component";
import { GalleryStartComponent } from "./gallery-start/gallery-start.component";
var galleryRoutes = [
    { path: '', component: GalleryComponent, children: [
            { path: '', component: GalleryStartComponent },
            { path: ':id', component: GalleryItemDetailComponent }
        ] }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(galleryRoutes)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return GalleryRoutingModule;
}());
export { GalleryRoutingModule };
