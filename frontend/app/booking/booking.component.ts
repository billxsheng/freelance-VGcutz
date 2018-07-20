import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';
@Component({
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    bookingForm: FormGroup;


    ngOnInit() {
        window.scroll(0,0);
        this.bookingForm = new FormGroup({
            'firstName': new FormControl(null, [Validators.required]),
            'lastName': new FormControl(null, [Validators.required]),
            'mobile': new FormControl(null, [Validators.required]),
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



    

    
}