import { Component } from "@angular/core";
import { GalleryItem } from "../gallery-item.model";

@Component({
    selector: 'gallery-list-component',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.css']
})

export class GalleryListComponent {
    galleryItems: GalleryItem[] = [
        new GalleryItem('fade', 'fade', ''),
        new GalleryItem('clean', 'clean',"")
    ];

    constructor () {

    }
}