import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadatak1Component } from './zadatak1.component';

describe('Zadatak1Component', () => {
  let component: Zadatak1Component;
  let fixture: ComponentFixture<Zadatak1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadatak1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadatak1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
