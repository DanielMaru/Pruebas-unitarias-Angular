import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorInput]'
})
export class ColorInputDirective {

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('click') onclick() {
    this.backgroundColor = 'blue';
  }

}
