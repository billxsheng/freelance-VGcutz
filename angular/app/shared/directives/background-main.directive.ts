import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';



@Directive ({
    selector: '[backgroundmain]'
})
export class BackgroundMainDirective implements OnInit {
    constructor(private elementref: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'white');
    }
}
