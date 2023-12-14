import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2SimpsonsComponent } from './proyecto2-simpsons.component';

describe('Proyecto2SimpsonsComponent', () => {
  let component: Proyecto2SimpsonsComponent;
  let fixture: ComponentFixture<Proyecto2SimpsonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto2SimpsonsComponent]
    });
    fixture = TestBed.createComponent(Proyecto2SimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
