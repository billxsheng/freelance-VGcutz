import { Directive, ElementRef, Renderer2 } from '@angular/core';
var BackgroundMainDirective = /** @class */ (function () {
    function BackgroundMainDirective(elementref, renderer) {
        this.elementref = elementref;
        this.renderer = renderer;
    }
    BackgroundMainDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'black');
    };
    BackgroundMainDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[backgroundmain]'
                },] },
    ];
    /** @nocollapse */
    BackgroundMainDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    return BackgroundMainDirective;
}());
export { BackgroundMainDirective };
