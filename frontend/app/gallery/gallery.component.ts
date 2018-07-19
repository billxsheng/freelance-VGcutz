import { Component, OnInit } from "@angular/core";
import { GalleryService } from "./gallery.service";

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    ngOnInit() {
        window.scroll(0,0);
    }
}