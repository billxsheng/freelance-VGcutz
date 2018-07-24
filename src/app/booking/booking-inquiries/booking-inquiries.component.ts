import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormControl, Validators } from "../../../../node_modules/@angular/forms";
import { BookingService } from "../booking.service";
import { Router, ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
    templateUrl:'booking-inquiries.component.html',
    styleUrls: ['booking-inquiries.component.css']
})

export class BookingInquiriesComponent implements OnInit {


    phonelimit: number = 10;
    bookingForm: FormGroup;
    req:String = 'This field is required';
    emailReq:string = 'Please enter a valid email.'
    dateReq: string = 'Please schedule a valid date.';
    timeReq: string = 'Please schedule a valid time.';
    paymentTypes = ['Cash', 'eTransfer'];
    currentDate;
    formSubmitted = false;
    now;



    ngOnInit() {
        console.log(this.getQueryParams().submit === "success");
        if(this.getQueryParams().submit === "success") {
            this.formSubmitted =true;
        }
        var now = new Date();
        now.setDate(now.getDate() + 14);
        window.scroll(0,0);
        this.bookingForm = new FormGroup({
            'firstName': new  FormControl(null, [Validators.required]),
            'lastName': new FormControl(null, [Validators.required]),
            'mobile': new FormControl(null, [Validators.required, this.phoneLengthValidator.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'image': new FormControl(null),
            'message': new FormControl(null)
        });
    }

    constructor(private bookingService : BookingService, private router: Router, private route: ActivatedRoute) {}


    getQueryParams() {
        return this.route.snapshot.queryParams;
    }

    onSubmit() {
        console.log(this.bookingForm);
         this.bookingService.postForm(this.bookingForm);
         this.bookingForm.reset();
         this.router.navigate(["/booking/inquiries"], {queryParams: {'submit': 'success'}});
    }


    phoneLengthValidator(control: FormControl) : {[s: string]: boolean} {
        if (control.value > 10000000000 || control.value < 999999999) {
            return {'Not a valid phone number': true}
        }
        return null;
    }
    
}