import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { MapComponent } from './home/map/map.component';
import {AgmCoreModule} from '@agm/core'



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PricingComponent,
        ContactComponent,
        GalleryComponent,
        BookingComponent,
        MapComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyA8FzTmvGjGcKsFyaM_zqG9BXgpHFvl18E'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}