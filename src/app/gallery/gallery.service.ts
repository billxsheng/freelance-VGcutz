import { GalleryItem } from "./gallery-item.model";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Subject } from "../../../node_modules/rxjs";
import {environment} from '../../environments/environment';

const BACKEND_URL = environment.apiURL + "/gallery";


@Injectable({providedIn: "root"})
export class GalleryService {

    constructor(private http: HttpClient) {}
    private selectedItem: GalleryItem;
    private selectedItemUpdated = new Subject<GalleryItem>();
    private galleryItems: GalleryItem[] = [];
    private galleryItemsUpdated = new Subject<GalleryItem[]>();

    getGalleryItems() {
        console.log(1);
        this.http.get<{galleryItems: GalleryItem[]}>("http://localhost:3000/gallery").subscribe((getData) => {
            this.galleryItems = getData.galleryItems;
            this.galleryItemsUpdated.next([...this.galleryItems]);
        });
        console.log(2);
    }

    

    getGalleryItemsListener() {
        return this.galleryItemsUpdated.asObservable();
    }
    
    getItem(id) {
        this.http.get<{galleryItems:GalleryItem}>(BACKEND_URL + '/' + id).subscribe((getData) => {
            console.log(getData);
            this.selectedItem = getData.galleryItems;
            this.selectedItemUpdated.next(this.selectedItem);
        });
    }

    getItemUpdated() {
        return this.selectedItemUpdated.asObservable();
    }


}