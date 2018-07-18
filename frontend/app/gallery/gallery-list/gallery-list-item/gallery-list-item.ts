import { Component, Input } from "../../../../../node_modules/@angular/core";
import { GalleryItem } from "../../gallery-item.model";

@Component({
    selector: 'gallery-list-item-component',
    templateUrl: './gallery-list-item.html',
    styleUrls: ['./gallery-list-item.css']
})

export class GalleryListItemComponent {
    @Input() galleryItem: GalleryItem;
    @Input() index: Number;

}