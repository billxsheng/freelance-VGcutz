import { Component, OnInit, OnDestroy } from "@angular/core";
import { GalleryItem } from "../gallery-item.model";
import { GalleryService } from "../gallery.service";
import { Subscription } from "../../../../node_modules/rxjs";

@Component({
    selector: 'gallery-list-component',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.css']
})

export class GalleryListComponent implements OnInit, OnDestroy {
    galleryItems: GalleryItem[];
    private galleryItemsSub: Subscription;

    constructor (private galleryService: GalleryService) {

    }

    onPracticeClick(data: String) {
        console.log('Event emitted by child class to parent HTML component. Parent method triggered.', data)
    }
    

    ngOnInit() {
        this.galleryService.getGalleryItems();
        this.galleryItemsSub = this.galleryService.getGalleryItemsUpdated().subscribe((galleryItems: GalleryItem[]) => {
            this.galleryItems = galleryItems;
        });
    }

    ngOnDestroy() {
        this.galleryItemsSub.unsubscribe();
    }
}