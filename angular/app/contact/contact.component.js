import { Component, ViewChild, ElementRef } from "@angular/core";
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.personalIG = '@varoongupta';
        this.businessIG = '@vgcutz';
        this.mobile = '647-795-4303';
    }
    ContactComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        console.log(this.test.nativeElement.innerHTML);
    };
    ContactComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './contact.component.html',
                    styleUrls: ['./contact.component.css']
                },] },
    ];
    /** @nocollapse */
    ContactComponent.propDecorators = {
        "test": [{ type: ViewChild, args: ['requiredInput', { read: ElementRef },] },],
    };
    return ContactComponent;
}());
export { ContactComponent };
