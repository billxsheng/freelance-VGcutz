import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { GalleryItem } from "../gallery-item.model";
import { GalleryService } from "../gallery.service";
import { Subscription } from "../../../../node_modules/rxjs";

@Component({
    selector: 'gallery-list-component',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.css']
})

export class GalleryListComponent implements OnInit {
    galleryItems: GalleryItem[] = [];
    private galleryItemsSub: Subscription;
    isLoading = false;
    length: Number;
    constructor (private galleryService: GalleryService) {

    }
    
    onPracticeClick(data: String) {
        console.log('Event emitted by child class to parent HTML component. Parent method triggered.', data)
    }
    
    ngOnInit() {
        this.isLoading = true;
        //get gallery items first then actions is emitted where it is listened in the line below
        this.galleryService.getGalleryItems();
        this.galleryService.getGalleryItemsListener().subscribe((galleryItems: GalleryItem[]) => {
            this.isLoading = false;
            this.galleryItems = galleryItems;
            this.length = galleryItems.length;
            console.log(this.length);
        });
    }


}