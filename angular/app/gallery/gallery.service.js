import { GalleryItem } from "./gallery-item.model";
var GalleryService = /** @class */ (function () {
    function GalleryService() {
        this.galleryItems = [
            new GalleryItem('Low Top Fade', 'Low top, short sides', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
            new GalleryItem('High Top Fade', 'High top, short sides', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
            new GalleryItem('Combover', 'Thickest of combovers', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
            new GalleryItem('Buzzcut', 'Special', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg")
        ];
    }
    GalleryService.prototype.getGalleryItems = function () {
        return this.galleryItems.slice();
    };
    GalleryService.prototype.getItem = function (id) {
        return this.galleryItems[id];
    };
    return GalleryService;
}());
export { GalleryService };
