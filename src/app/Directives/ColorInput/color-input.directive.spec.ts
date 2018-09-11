import { ColorInputDirective } from './color-input.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input type="text" id="input" appColorInput>'
})
class ComponentTestDirective{}



describe('ColorInputDirective', () => {
  let fixture: ComponentFixture<ComponentTestDirective>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorInputDirective, ComponentTestDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(ComponentTestDirective);
  });

  it('should change the input when the user click it', () => {
    const element = fixture.debugElement.query(By.css('#input'));
    expect(element.nativeElement.style.backgroundColor).toEqual('');
    element.nativeElement.click();
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual('blue');
  });
});
