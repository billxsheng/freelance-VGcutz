import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { GalleryService } from "../../gallery.service";
import { GalleryItem } from "../../gallery-item.model";

@Component({
    templateUrl: './gallery-item-detail.component.html',
    styleUrls: ['./gallery-item-detail.component.css']
})

export class GalleryItemDetailComponent implements OnInit {
    selectedItem: GalleryItem;
    prevId: Number;
    nextId: Number;
    listLength: Number = 4;
    disablePrev: Boolean = false;
    disableNext: Boolean = false;

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.galleryService.getItem(this.route.snapshot.params['id']);
            this.galleryService.getItemUpdated().subscribe((galleryItem) => {
                this.selectedItem = galleryItem;
            })
        });

    }

    constructor(private galleryService: GalleryService, private route: ActivatedRoute) {
        this.route.params.subscribe((params: Params) => {
            var index = parseInt(this.route.snapshot.params['id']);
            this.pageAccess(index);
        });

    }

    pageAccess(index) {
        this.disablePrev = this.disableNext = false;
        console.log(this.listLength);
        this.prevId = index - 1;
        this.nextId = index + 1;
        console.log(this.prevId, this.nextId);
        if ((index-1) < 0) {
            this.disablePrev = true;
        } else {
            this.prevId = index - 1;
        }

        if ((index+1) >= this.listLength) {
            this.disableNext = true;
        } else {
            this.nextId = index + 1
        }

    }


}