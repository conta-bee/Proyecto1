import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruta2Component } from './ruta2.component';

describe('Ruta2Component', () => {
  let component: Ruta2Component;
  let fixture: ComponentFixture<Ruta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ruta2Component]
    });
    fixture = TestBed.createComponent(Ruta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
