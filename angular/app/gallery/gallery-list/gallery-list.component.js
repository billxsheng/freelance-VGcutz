import { Component } from "@angular/core";
import { GalleryService } from "../gallery.service";
var GalleryListComponent = /** @class */ (function () {
    function GalleryListComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryListComponent.prototype.onPracticeClick = function (data) {
        console.log('Event emitted by child class to parent HTML component. Parent method triggered.', data);
    };
    GalleryListComponent.prototype.ngOnInit = function () {
        this.galleryItems = this.galleryService.getGalleryItems();
    };
    GalleryListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-list-component',
                    templateUrl: './gallery-list.component.html',
                    styleUrls: ['./gallery-list.component.css']
                },] },
    ];
    /** @nocollapse */
    GalleryListComponent.ctorParameters = function () { return [
        { type: GalleryService, },
    ]; };
    return GalleryListComponent;
}());
export { GalleryListComponent };
