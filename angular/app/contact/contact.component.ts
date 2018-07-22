import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
    @ViewChild('requiredInput', {read: ElementRef}) test: ElementRef;
    
    ngOnInit() {
        window.scrollTo(0,0);
    }

    ngAfterViewInit() {
        console.log(this.test.nativeElement.innerHTML);
    }

    personalIG: String = '@varoongupta';
    businessIG: string = '@vgcutz';
    mobile: String = '647-795-4303';

}