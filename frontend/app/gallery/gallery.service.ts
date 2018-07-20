import { GalleryItem } from "./gallery-item.model";

export class GalleryService {

    private galleryItems: GalleryItem[] = [
        new GalleryItem('fade', 'fade', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('clean', 'clean', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('clean', 'clean', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('clean', 'clean', "http://localhost:8080/frontend/assets/photos/gallery/monkey.jpg")

    ];

    getGalleryItems() {
        return this.galleryItems.slice();
    }

    getItem(id) {
        return this.galleryItems[id];
    }
}