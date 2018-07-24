import { Component, OnInit, Input } from "@angular/core";

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    @Input()

    ngOnInit() {
        window.scroll(0,0);
    }

    
}