import { HttpClient } from "@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import {environment} from '../../environments/environment';


const BACKEND_URI = environment.apiURL + '/booking';

@Injectable()
export class BookingService {
    constructor(private http: HttpClient, private router: Router ) {}
    

    postForm(firstName: string, lastName: string, email: string, mobile: string, image: File, message: string) {
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("image", image, email);
        formData.append("message", message);
        console.log(formData);
        this.http.post(BACKEND_URI + '/submit', formData).subscribe((responseData) => {
            console.log(responseData);
            if(responseData) {
                this.router.navigate(["/booking/inquiries/success"]);
            } else {
                this.router.navigate(["/booking/inquiries/failure"]);
            }
        })
    }

}