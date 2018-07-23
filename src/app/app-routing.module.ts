import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';


const appRoutes: Routes = [
    {path: '', component:  HomeComponent},
    {path: 'booking', loadChildren: './booking/booking.module#BookingModule'},
    {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
    {path: 'contact', component: ContactComponent},
    {path: 'pricing', component: PricingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


