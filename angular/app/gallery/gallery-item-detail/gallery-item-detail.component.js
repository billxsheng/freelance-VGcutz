import { Component } from "@angular/core";
import { GalleryService } from "../gallery.service";
import { ActivatedRoute } from "@angular/router";
var GalleryItemDetailComponent = /** @class */ (function () {
    function GalleryItemDetailComponent(galleryService, route) {
        this.galleryService = galleryService;
        this.route = route;
    }
    GalleryItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.selectedItem = _this.galleryService.getItem(_this.id);
        });
    };
    GalleryItemDetailComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './gallery-item-detail.component.html',
                    styleUrls: ['./gallery-item-detail.component.css']
                },] },
    ];
    /** @nocollapse */
    GalleryItemDetailComponent.ctorParameters = function () { return [
        { type: GalleryService, },
        { type: ActivatedRoute, },
    ]; };
    return GalleryItemDetailComponent;
}());
export { GalleryItemDetailComponent };
