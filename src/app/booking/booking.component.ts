import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit  {
    phonelimit: number = 10;
    bookingForm: FormGroup;
    req:String = 'This field is required';
    emailReq:string = 'Please enter a valid email.'
    dateReq: string = 'Please schedule a valid date.';
    timeReq: string = 'Please schedule a valid time.';
    currentDate;

    ngOnInit() {
        var now = new Date();
        now.setDate(now.getDate() + 14);
        window.scroll(0,0);
        this.bookingForm = new FormGroup({
            'firstName': new FormControl(null, [Validators.required]),
            'lastName': new FormControl(null, [Validators.required]),
            'mobile': new FormControl(null, [Validators.required, this.phoneLengthValidator.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'date': new FormControl(null, [Validators.required]),
            'time': new FormControl(null, [Validators.required]),
            'image': new FormControl(null),
            'notes': new FormControl(null)
        });
    }


    onSubmit() {
        console.log(this.bookingForm);
    }


    phoneLengthValidator(control: FormControl) : {[s: string]: boolean} {
        if (control.value > 10000000000 || control.value < 999999999) {
            return {'Not a valid phone number': true}
        }
        return null;
    }
    

    
}