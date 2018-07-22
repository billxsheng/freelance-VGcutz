import { Component, OnInit } from "@angular/core";
import { GalleryItem } from "../gallery-item.model";
import { GalleryService } from "../gallery.service";

@Component({
    selector: 'gallery-list-component',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.css']
})

export class GalleryListComponent implements OnInit {
    galleryItems: GalleryItem[];

    constructor (private galleryService: GalleryService) {

    }

    onPracticeClick(data: String) {
        console.log('Event emitted by child class to parent HTML component. Parent method triggered.', data)
    }
    

    ngOnInit() {
        this.galleryItems = this.galleryService.getGalleryItems();
    }
}