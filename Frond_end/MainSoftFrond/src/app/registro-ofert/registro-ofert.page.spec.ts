import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOfertPage } from './registro-ofert.page';

describe('RegistroOfertPage', () => {
  let component: RegistroOfertPage;
  let fixture: ComponentFixture<RegistroOfertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroOfertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroOfertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
