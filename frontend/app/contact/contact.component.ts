import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    ngOnInit() {
        window.scroll(0,0);
    }

}