import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    ngOnInit() {
        window.scroll(0,0);
    }
}