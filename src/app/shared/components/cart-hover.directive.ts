import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[CartHover]'
})
export class CartHoverDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener("mouseover") mouseover() {

    this.renderer.setStyle(
      this.el.nativeElement.children[0],
      "background-position", "top -112px left -147px"
    );

  }
  @HostListener("mouseout", ["$event"]) mouseout(event) {

    this.renderer.setStyle(
      this.el.nativeElement.children[0],
      "background-position", "top -112px left -91px"
    );
  }

}
