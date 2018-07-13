import { Component, AfterViewInit } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
    constructor() {

    }

    primaryNav: JQuery = $('nav-primary');
    scrollNav: JQuery = $('nav-scroll');

    height: Number = this.primaryNav.height();
    console.log(height);
    
    
}