import { Component } from "@angular/core";

@Component({
    selector:'map-component',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {
    latitude =  43.473178;
    longitude = -80.532913;
    address: String = 'UW/WLU Area';
    time: String = 'Fall 2018'
    city: String = 'Waterloo, ON'


}