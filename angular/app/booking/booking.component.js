import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
        this.phonelimit = 10;
        this.req = 'This field is required';
        this.emailReq = 'Please enter a valid email.';
        this.dateReq = 'Please schedule a valid date.';
        this.timeReq = 'Please schedule a valid time.';
    }
    BookingComponent.prototype.ngOnInit = function () {
        var now = new Date();
        now.setDate(now.getDate() + 14);
        window.scroll(0, 0);
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
    };
    BookingComponent.prototype.onSubmit = function () {
        console.log(this.bookingForm);
    };
    BookingComponent.prototype.phoneLengthValidator = function (control) {
        if (control.value > 10000000000 || control.value < 999999999) {
            return { 'Not a valid phone number': true };
        }
        return null;
    };
    BookingComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './booking.component.html',
                    styleUrls: ['./booking.component.css']
                },] },
    ];
    return BookingComponent;
}());
export { BookingComponent };
