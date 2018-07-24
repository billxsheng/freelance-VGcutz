import { HttpClient } from "@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Form } from "./form.model";

@Injectable()
export class BookingService {
    constructor(private http: HttpClient) {}
    

    postForm(submittedForm) {
        console.log('Posting inquiry.')
        var formValue = submittedForm.value;
        var form: Form = {firstName: formValue.firstName, lastName: formValue.lastName, email: formValue.email, mobile: formValue.mobile, imagePath: formValue.imagePath, message: formValue.message}; ;
        this.http.post('http://localhost:3000/booking/submit', form).subscribe((responseData) => {
            console.log(responseData);
        })
    }

}