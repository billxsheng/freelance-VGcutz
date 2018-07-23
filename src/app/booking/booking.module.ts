import { NgModule } from "../../../node_modules/@angular/core";
import { BookingComponent } from "./booking.component";
import { BookingInquiriesComponent } from "./booking-inquiries/booking-inquiries.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { BookingRoutingModule } from "./booking-routing.module";
import { BookingStartComponent } from "./booking-start/booking-start.component";
import { ReactiveFormsModule } from "../../../node_modules/@angular/forms";

@NgModule({
    declarations: [
        BookingComponent,
        BookingInquiriesComponent,
        BookingStartComponent
    ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        ReactiveFormsModule
    ],
    exports: [

    ]
})

export class BookingModule {

}