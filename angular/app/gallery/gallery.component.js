import { Component } from "@angular/core";
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    GalleryComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './gallery.component.html',
                    styleUrls: ['./gallery.component.css']
                },] },
    ];
    return GalleryComponent;
}());
export { GalleryComponent };
