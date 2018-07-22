import { Component, Input, EventEmitter, Output } from "@angular/core";
import { GalleryItem } from "../../gallery-item.model";
var GalleryListItemComponent = /** @class */ (function () {
    function GalleryListItemComponent() {
        this.exampleAdded = new EventEmitter();
    }
    GalleryListItemComponent.prototype.emitExampleEvent = function () {
        this.exampleAdded.emit(this.galleryItem.name);
    };
    GalleryListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-list-item-component',
                    templateUrl: './gallery-list-item.html',
                    styleUrls: ['./gallery-list-item.css']
                },] },
    ];
    /** @nocollapse */
    GalleryListItemComponent.propDecorators = {
        "exampleAdded": [{ type: Output },],
        "galleryItem": [{ type: Input },],
        "index": [{ type: Input },],
    };
    return GalleryListItemComponent;
}());
export { GalleryListItemComponent };
