import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultOfertPage } from './consult-ofert.page';

describe('ConsultOfertPage', () => {
  let component: ConsultOfertPage;
  let fixture: ComponentFixture<ConsultOfertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultOfertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultOfertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
