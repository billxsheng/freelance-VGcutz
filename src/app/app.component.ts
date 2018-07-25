import { Component } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // isLoading = true;

    // constructor(private router: Router) {
    //     router.events.subscribe((event: RouterEvent) => {
    //         this.navigationInterceptor(event)
    //     });
    // }


    // navigationInterceptor(event: RouterEvent): void {
    //     if (event instanceof NavigationStart) {
            
    //         this.isLoading = true
    //     }
    //     if (event instanceof NavigationEnd) {
    //         setTimeout(() => {
    //             this.isLoading = false

    //         }, 150);
    //     }

    //     if(event instanceof NavigationCancel) {
    //      this.isLoading = false
    //     }
    //     if (event instanceof NavigationError) {
    //        this.isLoading = false
    //     }
    // }

    


   
}