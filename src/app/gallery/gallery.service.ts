import { GalleryItem } from "./gallery-item.model";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Subject } from "../../../node_modules/rxjs";
import { EventEmitter } from "@angular/core";

@Injectable({providedIn: "root"})
export class GalleryService {

    constructor(private http: HttpClient) {}
    private selectedItem: GalleryItem;
    private selectedItemUpdated = new Subject<GalleryItem>();
    private galleryItems: GalleryItem[] = [];
    private galleryItemsUpdated = new Subject<GalleryItem[]>();

    getGalleryItems() {
        console.log('Getting items.');
        this.http.get<{galleryItems: GalleryItem[]}>('http://localhost:3000/gallery').subscribe((getData) => {
            console.log(getData.galleryItems);
            this.galleryItems = getData.galleryItems;
            //emits copy of gallery items after they are updated
            this.galleryItemsUpdated.next([...this.galleryItems]);
        });
        console.log(1);
    }

    getGalleryItemsListener() {
        console.log('Update listener');
        return this.galleryItemsUpdated.asObservable();
    }
    
    getItem(id) {
        console.log('Getting selected item');
        this.http.get<{galleryItems:GalleryItem}>('http://localhost:3000/gallery/' + id).subscribe((getData) => {
            console.log(getData);
            this.selectedItem = getData.galleryItems;
            this.selectedItemUpdated.next(this.selectedItem);
        });
    }

    getItemUpdated() {
        return this.selectedItemUpdated.asObservable();
    }


}