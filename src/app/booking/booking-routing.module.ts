import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { BookingComponent } from './booking.component';
import { BookingStartComponent } from './booking-start/booking-start.component';
import { BookingInquiriesComponent } from './booking-inquiries/booking-inquiries.component';


const bookingRoutes: Routes = [
    {path: '', component: BookingComponent, children: [
        {path:'', component: BookingStartComponent},
        {path: 'inquiries', component: BookingInquiriesComponent}
    ]}
]


@NgModule({
    imports: [
        RouterModule.forChild(bookingRoutes)
    ],
    exports: [
        RouterModule
    ]
})



export class BookingRoutingModule {

}


