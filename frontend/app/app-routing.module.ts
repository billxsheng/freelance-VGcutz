import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';


const appRoutes: Routes = [
    {path: '', component:  HomeComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'pricing', component: PricingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


