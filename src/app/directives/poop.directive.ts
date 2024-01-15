import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[poop]',
})

export class PoopDirective {
  constructor(
    private renderer: Renderer2,
    private _elementRef: ElementRef) {
  }

  @Input() set poop(clicked: boolean) {
    if (clicked) {
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('💩');
      this.renderer.appendChild(div, text);
      this.renderer.insertBefore(this._elementRef.nativeElement.parentElement, div, this.renderer.nextSibling(this._elementRef.nativeElement));
    }
  }
}
