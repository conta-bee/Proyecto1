import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3Component } from './ejemplo3.component';

describe('Ejemplo3Component', () => {
  let component: Ejemplo3Component;
  let fixture: ComponentFixture<Ejemplo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejemplo3Component]
    });
    fixture = TestBed.createComponent(Ejemplo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
