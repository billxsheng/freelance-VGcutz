import { GalleryItem } from "./gallery-item.model";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class GalleryService {

    constructor(private http: HttpClient) {}

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