import { Component } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    RouterOutlet
} from '@angular/router'
import { trigger, state, transition, style, animate } from '../../node_modules/@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // animations:[
    //     trigger('main-router', [
    //         state('in', style({
    //             opacity: 1
    //         })),
    //         transition('void => *', [
    //             style({opacity: 0}),
    //             animate(150)
    //         ]),
    //         transition('* => void', [
    //             style({opacity: 0}),
    //             animate(150)
    //         ])
    //     ])
    // ]
})
export class AppComponent {


    isLoading = true;


    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event)
        });
    }

  
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            
            this.isLoading = true
        }
        if (event instanceof NavigationEnd) {
            setTimeout(() => {
                this.isLoading = false

            }, 200);
        }

        if(event instanceof NavigationCancel) {
         this.isLoading = false
        }
        if (event instanceof NavigationError) {
           this.isLoading = false
        }
    }

    


   
}