import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../gallery.service";
import { ActivatedRoute, Params } from "@angular/router";
import { GalleryItem } from "../gallery-item.model";

@Component({
    templateUrl: './gallery-item-detail.component.html',
    styleUrls: ['./gallery-item-detail.component.css']
})

export class GalleryItemDetailComponent implements OnInit {
    id:Number;
    selectedItem : GalleryItem;
    constructor(private galleryService: GalleryService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.selectedItem = this.galleryService.getItem(this.id);
            }
        );
    }
}