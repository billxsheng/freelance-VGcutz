import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';


const appRoutes: Routes = [
    {path: '', component:  HomeComponent, data: {page: 'home'}},
    {path: 'booking', loadChildren: './booking/booking.module#BookingModule', data: {page: 'booking'}},
    {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule', data: {page: 'gallery'}},
    {path: 'contact', component: ContactComponent, data: {page: 'contact'}},
    {path: 'pricing', component: PricingComponent, data: {page: 'pricing'}}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


