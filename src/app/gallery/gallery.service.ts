import { GalleryItem } from "./gallery-item.model";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Subject } from "../../../node_modules/rxjs";

@Injectable()
export class GalleryService {

    constructor(private http: HttpClient) {}

    private galleryItems: GalleryItem[] = [];
    private galleryItemsUpdated = new Subject<GalleryItem[]>();

    getGalleryItems() {
        console.log('Getting items.');
        this.http.get<{galleryItems: GalleryItem[]}>('http://localhost:3000/gallery').subscribe((getData) => {
            console.log(getData.galleryItems);
            this.galleryItems = getData.galleryItems;
            this.galleryItemsUpdated.next([...this.galleryItems]);
        });
    }

    getGalleryItemsUpdated() {
        return this.galleryItemsUpdated.asObservable();
    }


    getItem(id) {
        return this.galleryItems[id];
    }
}