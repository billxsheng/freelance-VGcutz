import { GalleryItem } from "./gallery-item.model";

export class GalleryService {

    private galleryItems: GalleryItem[] = [
        new GalleryItem('fade', 'fade', ''),
        new GalleryItem('clean', 'clean',"")
    ];

    getGalleryItems() {
        return this.galleryItems.slice();
    }
}