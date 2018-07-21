import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core";
import { GalleryItem } from "../../gallery-item.model";

@Component({
    selector: 'gallery-list-item-component',
    templateUrl: './gallery-list-item.html',
    styleUrls: ['./gallery-list-item.css']
})

export class GalleryListItemComponent {
    @Output()exampleAdded = new EventEmitter<String>();
    @Input() galleryItem: GalleryItem;
    @Input() index: Number;

    emitExampleEvent() {
        this.exampleAdded.emit(this.galleryItem.name);
    }
}