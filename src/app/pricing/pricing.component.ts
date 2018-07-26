import { Component, AfterViewInit, OnInit } from "@angular/core";


@Component({
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
    btnOn: boolean = false;

    constructor () {
        this.turnOnBtn();
    }


    turnOnBtn:Function = (() => {
        this.btnOn = true;
    });

    ngOnInit() {
        window.scroll(0,0);
    }
}