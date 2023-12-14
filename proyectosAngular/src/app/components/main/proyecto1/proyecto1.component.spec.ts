import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto1Component } from './proyecto1.component';

describe('Proyecto1Component', () => {
  let component: Proyecto1Component;
  let fixture: ComponentFixture<Proyecto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto1Component]
    });
    fixture = TestBed.createComponent(Proyecto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
