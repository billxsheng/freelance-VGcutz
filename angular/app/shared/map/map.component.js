import { Component } from "@angular/core";
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.latitude = 43.473178;
        this.longitude = -80.532913;
        this.address = 'Sunview Street & University Street West';
        this.time = 'Fall 2018';
        this.city = 'Waterloo, ON';
    }
    MapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'map-component',
                    templateUrl: './map.component.html',
                    styleUrls: ['./map.component.css']
                },] },
    ];
    return MapComponent;
}());
export { MapComponent };
