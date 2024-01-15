import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[primaryColor]'
})
export class PrimaryColorDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#0094d2');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#333333');
  }
}
