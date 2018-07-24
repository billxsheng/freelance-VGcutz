import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { GalleryService } from "../gallery.service";
import { ActivatedRoute, Params } from "@angular/router";
import { GalleryItem } from "../gallery-item.model";
import { Subscription } from "../../../../node_modules/rxjs";

@Component({
    templateUrl: './gallery-item-detail.component.html',
    styleUrls: ['./gallery-item-detail.component.css']
})

export class GalleryItemDetailComponent implements OnInit {
    id:Number;
    selectedItem : GalleryItem;
    selectedItemSub: Subscription;
    idNext: Number;
    idPrev: Number;

    constructor(private galleryService: GalleryService, private route: ActivatedRoute) {
        var currIndex = +this.route.snapshot.params['id'];
        this.idNext = currIndex++;
        this.idPrev = currIndex--;
    }

    ngOnInit() {
        console.log(this.galleryService.getItem(this.id));
        console.log(this.idNext, this.idPrev);
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.selectedItem = this.galleryService.getItem(this.id);
            }
        )

    }
}