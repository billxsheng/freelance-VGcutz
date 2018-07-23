import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';

@NgModule({
    imports: [
        RouterModule.forChild([{path: '', component: BookingComponent}])
    ],
    exports: [
        RouterModule
    ]
})

export class BookingRoutingModule {

}