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
import { trigger, state, transition, style, animate, query } from '../../node_modules/@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations:[
        trigger('main-router', [
            transition('* => *', [
              query(
                ':enter',
                [style({ opacity: 0 })],
                { optional: true }
              ),
              query(
                ':leave',
                [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
                { optional: true }
              ),
              query(
                ':enter',
                [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
                { optional: true }
              )
            ])
          ])
    ]
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