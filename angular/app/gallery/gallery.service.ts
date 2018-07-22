import { GalleryItem } from "./gallery-item.model";

export class GalleryService {

    private galleryItems: GalleryItem[] = [
        new GalleryItem('Low Top Fade', 'Low top, short sides', "http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('High Top Fade', 'High top, short sides', "http://localhost:/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('Combover', 'Thickest of combovers', "http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"),
        new GalleryItem('Buzzcut', 'Special', "http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg")
    ];

    getGalleryItems() {
        return this.galleryItems.slice();
    }

    getItem(id) {
        return this.galleryItems[id];
    }
}